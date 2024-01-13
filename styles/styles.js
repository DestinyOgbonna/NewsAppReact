import { StyleSheet, StatusBar } from "react-native"



export const NewsAppStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        paddingTop: StatusBar.currentHeight,
    },

    contentImage: {
        height: 300,
        width: '100%',
    }, contentContainer: {
        margin: 15,

    },
    authorImage: {
        height: 50,
        width: '15%',
        borderRadius: 10,
    },
    authorContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 30,
    },
    content: {
        marginTop: 10,
        fontSize: 15,
        fontWeight: '400',
        textAlign:'justify'
    },
    author: {
        paddingLeft: 8,
        fontWeight: 'bold',
    }

})