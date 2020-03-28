import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { View, Text, Image, TouchableOpacity, Linking } from 'react-native';
//import * as MailCompose from 'expo-mail-composer';
import logoImg from '../../assets/logo.png';

import styles from './styles';

export default function Detail() {
    const navigation = useNavigation();
    const route = useRoute();
    const incident = route.params.incident;
    const message = 'Hey, I am contacting you about case.';

    function navigateBack() {
        navigation.goBack()
    }

    /* function sendMail() {
        MailCompose.composeAsync({
            subject: 'Hero case: Dog cute',
            recipients: ['contato@paulo-roberto.tk'],
            body: message,
        })
    } */

    function sendWhatsApp() {
        Linking.openURL(`whastapp://send?phone=${incident.whataspp}&text=${message}`);
    }

    return (
        <View style={styles.container}>
            <View style={styles.header} >
                <Image source={logoImg} />
                <TouchableOpacity onPress={navigateBack}>
                    <Feather name="arrow-left" size={28} color="#E02041" />
                </TouchableOpacity>
            </View>

            <View style={styles.detail}>
                <Text style={styles.detailProperty, { marginTop: 0 }}>ONG</Text>
                <Text style={styles.detailValue}>{incident.name} in {incident.city}/{incident.uf}</Text>

                <Text style={styles.detailProperty}>CASE</Text>
                <Text style={styles.detailValue}>{incident.title}</Text>

                <Text style={styles.detailProperty}>Value</Text>
                <Text style={styles.detailValue}>
                    {Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(incident.value)}
                </Text>
            </View>

            <View style={styles.contactBox}>
                <Text style={styles.heroTitle}>Save day!</Text>
                <Text style={styles.heroTitle}>Be hero these case.</Text>
                <Text style={styles.heroDescription}>Contact</Text>
                <View style={styles.actions}>
                    <TouchableOpacity style={styles.action} onPress={sendWhatsApp}>
                        <Text style={styles.actionText}>WhastApp</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.action} onPress={() => { }}>
                        <Text style={styles.actionText}>E-mail</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}