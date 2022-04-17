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
import { PrimaryButton } from "../components/Buttons";

const Quiz = ({ navigation }) => {
    const { isDesktop, isMobile, isTablet } = DimensionsHook();
    return (
        <View style={styles.container}>
            <View style={{ flex: 1 }}>
                <BackHeader navigation={navigation} />
                <ScrollView>
                    <View style={{
                        flex: 1,
                        width: "50%",
                        alignSelf: "center",
                        marginTop: 50
                    }}>
                        <ProgressBar style={{width:796,backgroundColor:'#D5CBCA',height:13}} progress={0.5} color={colors.green2}/>
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}

export default Quiz


const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.beige,
        flex: 1,
    },
})