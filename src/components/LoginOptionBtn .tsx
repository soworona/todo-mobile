import { StyleSheet, Text, TouchableOpacity } from "react-native"

type LoginOptionBtnProps ={
    label: string,
    onClick: () => void
}

const LoginOptionBtn = (props:LoginOptionBtnProps) => { 
    return(
        <TouchableOpacity
        style={styles.btn} onPress={props.onClick}>
            <Text 
            style={styles.txt}>{props.label}</Text>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    btn: {
        flexDirection:'row',
        justifyContent:'center',
        gap: 8,
        padding:16,
        borderRadius: 8,
        borderWidth:1,
        borderColor:'#383f32ff',
        backgroundColor: '#eeeeeeff'
    },
    txt: {
        fontSize: 16,
        fontWeight: 500,
        textAlign: 'center',
        color:'#383f32ff'
    },
    icon: {
        width:35,
        height: 35
    }
})
export default LoginOptionBtn;