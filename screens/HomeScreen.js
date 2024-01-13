import { View, StyleSheet, Text, StatusBar, Image, Pressable, FlatList } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from "@react-navigation/native";
import moment from 'moment';
import {
    useState, useEffect
} from 'react'


export default function HomeScreen() {

    const [fetchedNews, setFetchedNews] = useState([])

 
const  getNewsApi = async ()=>{
    try {
        const newsResponse = await fetch(`https://newsapi.org/v2/everything?q=apple&from=2024-01-11&to=2024-01-11&sortBy=popularity&apiKey=518434e3f3154ce3bcdd9ecf05fa2084`);
        if (newsResponse.ok === true) {
           const data = await newsResponse.json();
         
        setFetchedNews(data.articles);
        }
        else{
            console.log('Fuck offf');   
        }
    } catch (error) {
        
    }
}

useEffect(() => {
   getNewsApi();

  })
    const navigation = useNavigation()
    return (
        <View style={HomeStyles.homeContainer}>
            <Text style={HomeStyles.header}>NEWs</Text>
             <FlatList
             data={fetchedNews}
             renderItem={({ item })=>{
                return (
                    <Pressable onPress={() => navigation.navigate('newsDetailsScreen',{
                        title: `${item.title}`,
                        image: `${item.urlToImage}`,
                        content: `${item.content}`,
                        author: `${item.author}`,
                    })}>
                    <View style={HomeStyles.newsContainer}>
                        <Image source={{ uri: item.urlToImage }} style={HomeStyles.image} />
    
                        <Text style={HomeStyles.newsTitle}>{item.title}</Text>
                        <View style={HomeStyles.postedTimeSection}>
                            <View style={HomeStyles.postedTimeContainer}>
                                <Text style={HomeStyles.postedTime}>{item.publishedAt}  | </Text>
                                <Text style={HomeStyles.postedTime}>4 mins read</Text>
                            </View>
                            <Ionicons name="heart-outline" size={20} color={'grey'}></Ionicons>
                        </View>
                    </View>
                </Pressable>
                );
             }}
            //  ListEmptyComponent={
            //     <View style={styles.emptyListStle}>
            //      <Text style={styles.emptyText}>🤦‍♂️</Text>
            //     <Text style={styles.emptyText}>NO DATA FOUND</Text>
            //     </View>
            //     }
             ItemSeparatorComponent={()=> <View style={{height:30}}></View>}> 
        </FlatList>
        </View>
    );

}

const HomeStyles = StyleSheet.create({
    homeContainer: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        paddingTop: StatusBar.currentHeight,
    },

    newsContainer: {
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 10,
        shadowColor: 'black',
        margin: 15,
        marginTop: -30,
    

        shadowOffset: {
            width: 0,
            height: 2,
        },
        elevation: 10,
        shadowOpacity: 0.25,
        shadowRadius: 4
    }
    ,
    image: {
        height: 120,
        width: '100%',
        borderRadius: 10

    },

    newsTitle: {
        fontSize: 18,
        fontWeight: '700',
        paddingTop: 10,
        paddingBottom: 10,
    },

    postedTime: {
        color: 'grey',
        fontSize: 13,
        fontWeight: '600'
    },
    postedTimeContainer: {
        flexDirection: 'row'
    },
    postedTimeSection: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }, header:{
     margin: 15,
        fontSize: 18,
        fontWeight: '700',
  paddingBottom: 5,
    }
})