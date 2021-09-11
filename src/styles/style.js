import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        paddingTop: 20,
    },
    item: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 10,
    },
    newTaskButton: {
        width: 60,
        height: 60,
        position: "absolute",
        bottom: 30,
        left: 30,
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
        fontSize: 26,
        fontWeight: "bold",
    },
});

export default styles;