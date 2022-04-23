import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react';
import { ProgressBar } from 'react-native-paper';
import {
    H2,
    SmallBoldTxt,
    H5,
    LightTxt,
    Txt,
    H6,
    H7,
    SmallLightTxt,
} from "../components/TextsComponents";
import BackHeader from "../components/BackHeader";
import { colors } from "../styles/GlobalStyle";
import Footer from "../components/Footer";
import DimensionsHook from "../hooks/DimensionsHook";
import { PrimaryButton, SecondaryButton } from "../components/Buttons";
import { CheckCircle } from '../assets/svg/space';

const Message = ({ navigation }) => {
    const { isDesktop, isMobile, isTablet } = DimensionsHook();
    return (
        <View style={styles.container}>
            <View style={{ flex: 1 }}>
                <BackHeader navigation={navigation} />
                <ScrollView>
                    <View style={styles.section}>
                        <View style={styles.image}>
                            <CheckCircle />
                        </View>
                        {/* <H6>
                            Nous vous remercions d’avoir pris le temps de répondre à toutes ces questions. Elles sont protégées par les règlementations de protections de données les plus strictes (lien sur nos conditions). Vous pouvez à tous moments décider de supprimer ces informations, en nous contactant.
                        </H6>
                        <H7>
                            Lorsque vous choisissez l’activité « PARLER » dans votre espace personnel, les informations du questionnaire ne sont pas utilisées, il est possible que nous vous proposions de les exprimer de nouveau dans les échanges.

                            En première analyse, nous vous recommandons vivement de prendre contact avec votre médecin.
                            Il est également possible que le fait d’avoir répondu à toutes ces questions vous ait un peu ébranlé, en vous faisant prendre conscience de certaines choses. N’hésitez pas à nous en faire part, et/ou à prendre rendez-vous avec un de nos experts. Vous pouvez aussi vous rapprocher de votre médecin.

                            Rendez-vous maintenant dans votre espace personnel, rubrique Recommandations.
                        </H7>
                        <SecondaryButton
                            style={{ width: "48%" }}
                        >Retour</SecondaryButton> */}
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}

export default Message


const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.beige,
        flex: 1,
    },
    image: {
        width: 60,
        height: 60
    },
    section: {
        top: '20%',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        position: 'relative',
        width: '60%'
    }
})