import { useState } from "react"
import { Modal, View, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, Switch, KeyboardAvoidingView, Platform } from "react-native"
import Ionicons from "@expo/vector-icons/Ionicons"
import styles from "./styles"

const CATEGORIES=["Kira","Fatura","Market","Ulaşım","Eğlence","Sağlık","Diğer"]

const formatDate=(date)=>{
    const day=String(date.getDate()).padStart(2,"0")
    const month=String(date.getMonth()+1).padStart(2,"0")
    return `${day}.${month}.${date.getFullYear()}`
}

export const NewTransactionModal=({visible,onClose,onSave})=>{
    const [type,setType]=useState("Gider")
    const [amount,setAmount]=useState("0")
    const [category,setCategory]=useState(null)
    const [note,setNote]=useState("")
    const [recurring,setRecurring]=useState(false)
    const date=formatDate(new Date())

    const handleSave=()=>{
        onSave?.({type,amount,category,date,note,recurring})
        onClose?.()
    }

    return(
        <Modal visible={visible} transparent animationType="slide" onRequestClose={onClose}>
            <TouchableWithoutFeedback onPress={onClose}>
                <View style={styles.overlay}>
                    <TouchableWithoutFeedback>
                        <KeyboardAvoidingView behavior={Platform.OS==="ios" ? "padding" : undefined} style={styles.sheet}>
                            <View style={styles.handle}/>
                            <Text style={styles.title}>Yeni İşlem</Text>

                            <View style={styles.segment}>
                                <TouchableOpacity
                                    style={[styles.segmentBtn, type==="Gider" && styles.segmentBtnExpenseActive]}
                                    onPress={()=>setType("Gider")}
                                >
                                    <Text style={[styles.segmentText, type==="Gider" && styles.segmentTextActive]}>Gider</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={[styles.segmentBtn, type==="Gelir" && styles.segmentBtnIncomeActive]}
                                    onPress={()=>setType("Gelir")}
                                >
                                    <Text style={[styles.segmentText, type==="Gelir" && styles.segmentTextActive]}>Gelir</Text>
                                </TouchableOpacity>
                            </View>

                            <Text style={styles.label}>Tutar</Text>
                            <View style={styles.amountRow}>
                                <Text style={styles.currency}>₺</Text>
                                <TextInput
                                    style={styles.amountInput}
                                    value={amount}
                                    onChangeText={setAmount}
                                    keyboardType="numeric"
                                />
                            </View>

                            <Text style={styles.label}>Kategori</Text>
                            <View style={styles.chipRow}>
                                {CATEGORIES.map(name=>(
                                    <TouchableOpacity
                                        key={name}
                                        style={[styles.chip, category===name && styles.chipActive]}
                                        onPress={()=>setCategory(name)}
                                    >
                                        <Text style={[styles.chipText, category===name && styles.chipTextActive]}>{name}</Text>
                                    </TouchableOpacity>
                                ))}
                            </View>

                            <Text style={styles.label}>Tarih</Text>
                            <View style={styles.dateRow}>
                                <Text style={styles.dateText}>{date}</Text>
                                <Ionicons name="calendar-outline" size={18} color="#5a6472"/>
                            </View>

                            <Text style={styles.label}>Not (opsiyonel)</Text>
                            <TextInput
                                style={styles.noteInput}
                                placeholder="Örn: Ocak ayı kirası"
                                placeholderTextColor="#5a6472"
                                value={note}
                                onChangeText={setNote}
                            />

                            <View style={styles.recurringRow}>
                                <View style={styles.recurringText}>
                                    <Text style={styles.recurringTitle}>Tekrarlayan işlem</Text>
                                    <Text style={styles.recurringSubtitle}>Abonelik / fatura için her ay tekrarla</Text>
                                </View>
                                <Switch
                                    value={recurring}
                                    onValueChange={setRecurring}
                                    trackColor={{false:"#2a2f3a",true:"#4f46e5"}}
                                    thumbColor="white"
                                />
                            </View>

                            <TouchableOpacity style={styles.saveBtn} onPress={handleSave}>
                                <Text style={styles.saveBtnText}>Kaydet</Text>
                            </TouchableOpacity>
                        </KeyboardAvoidingView>
                    </TouchableWithoutFeedback>
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    )
}
