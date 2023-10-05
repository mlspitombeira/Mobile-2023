import { View, Text, SectionList, StyleSheet } from "react-native"
import { PaperProvider, IconButton, MD3Colors } from "react-native-paper"
import dados from "./dados";

const MySectionList = () => {
    return (
      <PaperProvider>
      <View style={estilos.container}>
        <SectionList
          sections={dados}
          keyExtractor={(item) => "SDDCeredEDDeed" + item.id}
          renderItem= {({ item }) => {
            return (
              <View>
                <Text style={{ fontSize: 25 }}>{item.nome}</Text>
                {item.compras.map((compra, index) => (
                  <View key={index} style={estilos.compraContainer}>
                  <IconButton
                    icon="tools"
                    iconColor={MD3Colors.tertiary0}
                    size={30}
                    onPress={() => console.log('Pressed')}
                    mode="contained"
                    disabled={true}
                />
                    <Text>{compra.nomeCompra}</Text>
                    <Text>{compra.horarioCompra}</Text>
                    <Text>{compra.valorCompra}</Text>
                  </View>
                ))}
              </View>
            );
          }
          }
          renderSectionHeader={({ section }) => {
            return (
              <Text style={{ fontSize: 25, fontWeight: "bold" }}>
                {section.title}
              </Text>
            );
          }}
        />
      </View>
      </PaperProvider>
    );
  };
  
  const estilos = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "flex-start",
      alignItems: "center",
      paddingTop: 25,
    },
    compraContainer: {
      flexDirection: "row",
      alignItems: "center",
    },
    iconeCompra: {
      width: 24,
      height: 24,
      marginRight: 10,
    },
  });
  
  
  export default MySectionList;