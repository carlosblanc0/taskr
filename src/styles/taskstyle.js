import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        paddingTop: 20,
    },
    description: {
        width: "90%",
        marginTop: 20,
        marginLeft: 20,
        fontSize: 16,
    },
    item: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 10,
    },
    textInput: {
        width: "90%",
        marginTop: 8,
        padding: 20,
        height: 60,
        borderBottomWidth: 1,
        borderBottomColor: "#FF9500",
        color: "#FF9500",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: 10,
    },
    newTaskButton: {
        width: 50,
        height: 50,
        position: "relative",
        bottom: 1,
        left: 10,
        backgroundColor: "#FF9500",
        borderRadius: 60,
        justifyContent: "center",
        alignItems: "center",
    },
    deleteTaskButton: {
        justifyContent: "center",
        paddingLeft: 10,
    },
    taskDescription: {
        width: "75%",
        alignContent: "flex-start",
        backgroundColor: "#f5f5f5",
        padding: 12,
        paddingHorizontal: 20,
        borderRadius: 50,
        marginBottom: 5,
        marginRight: 15,
        color: "#343434",
    },
    iconButton: {
        color: "#ffffff",
        fontSize: 15,
        fontWeight: "bold",
    },
});

export default styles;