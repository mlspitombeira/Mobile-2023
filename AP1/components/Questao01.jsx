import { View, Text, SectionList, StyleSheet } from "react-native"

const MySectionList = () => {
    return (
      <View style={estilos.container}>
        <SectionList
          sections={dados}
          keyExtractor={(item) => "SDDCeredEDDeed" + item.id}
          renderItem={({ item }) => {
            return (
              <View>
                <Text style={{ fontSize: 25 }}>{item.nome}</Text>
                {item.compras.map((compra, index) => (
                  <View key={index} style={estilos.compraContainer}>
                    <Image
                      source={require("icone_compra.png")} 
                      style={estilos.iconeCompra}
                    />
                    <Text>{compra.nomeCompra}</Text>
                    <Text>{compra.horarioCompra}</Text>
                    <Text>{compra.valorCompra}</Text>
                  </View>
                ))}
              </View>
            );
          }}
          renderSectionHeader={({ section }) => {
            return (
              <Text style={{ fontSize: 25, fontWeight: "bold" }}>
                {section.title}
              </Text>
            );
          }}
        />
      </View>
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