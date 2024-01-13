import { View, Text,ImageBackground, StyleSheet, StatusBar, Image } from "react-native";
// import NewsAppStyle from '../styles/styles.js'


export default function NewsDetailsScreen({ route }) {

    const { title } = route.params
    const { image } = route.params
    const { content } = route.params
    const { author } = route.params
    return (
        <View style={NewsAppStyle.container}>
            <ImageBackground source={{ uri: image }}
                style={NewsAppStyle.contentImage} >
                    <View style={NewsAppStyle.overlay}>
        <Text style={NewsAppStyle.textWithShadow}>{title}</Text>
      </View>
                </ImageBackground>
            <View style={
                NewsAppStyle.contentContainer
            } >
               
                <Text style={NewsAppStyle.content}>
                    {content}
                </Text>
                <View style={
                    NewsAppStyle.authorContainer}>
                    <Image source={{ uri: image }}
                        style={NewsAppStyle.authorImage} />
                    <Text style={NewsAppStyle.author}>
                        {author}
                    </Text>
                </View>
            </View>
            <Text></Text>
        </View>
    )

}

const NewsAppStyle = StyleSheet.create({
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
        textAlign: 'justify'
    },
    author: {
        paddingLeft: 8,
        fontWeight: 'bold',
    },
    newsTitle: {
        fontSize: 18,
        fontWeight: '700',
        paddingTop: 5,
        paddingBottom: 5,
        fontStyle: 'italic'
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover', 
        justifyContent: 'space-between',
      },
      overlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)', // Adjust the opacity/color of the overlay
        justifyContent: 'center',
       alignItems: 'flex-start'
      },
      textWithShadow: {
        fontSize: 18,
        color: 'white', // Text color
        fontWeight: 'bold',
        textShadowOffset: { width: 2, height: 2 }, 
         paddingTop:200,
        textShadowRadius: 10, margin: 15,
      },

})