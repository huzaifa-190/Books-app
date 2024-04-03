import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from "react-native";
import useFetchBooks from "./useFetchBooks";

const Books = () => {
  const { books, loading } = useFetchBooks();
  const [search, setSearch] = useState("");
  const [rtl, setRtl] = useState(false);

  if (loading) {
    return <Text style={styles.loading}>Fetching data...</Text>;
  }

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={styles.container}>
      {/* <Text style={{}}>Books</Text> */}
      <View style={{flex:0.1, flexDirection:'row'}}>



      <TextInput
        style={styles.input}
        value={search}
        onChangeText={setSearch}
        placeholder="Search by book name"
      />
      <TouchableOpacity style={styles.button} onPress={() => setRtl(!rtl)}>
        <Text style={styles.buttonText}>{rtl ? "To English" : "To Urdu"}</Text>
      </TouchableOpacity>
      </View>


      <View style={{flex:0.9 , backgroundColor:'black'}}>

      <FlatList
        data={filteredBooks}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <Text style={[styles.item, { textAlign: rtl ? "right" : "left" }]}>
            {item.title}
          </Text>
        )}
      />
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius:20,
    width:280
  },
  button: {
    backgroundColor: "purple",
    padding: 10,
    height: 40,
    width: 100,
    // marginBottom: 10,
    borderRadius: 20,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    color:'white',
    borderBottomColor: "#CCC",
    // backgroundColor:'grey'
  },
  loading: {
    marginTop: 50,
    textAlign: "center",
    color:'green',
    alignSelf:'center'
  },
});

export default Books;
