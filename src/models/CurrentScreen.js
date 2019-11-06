export default class CurrentScreen {
    static CurrentScreenManagerInstance = null;
    currentScreen = 1
    Observers = [];
    addObserver(observer) {
        this.Observers[this.Observers.length] = observer
    }
    removeObserver(o) {
        this.Observers = this.Observers.filter((observer) => observer != o);
    }
    static getCurrentScreenManagerInstance() {
        if (CurrentScreenManager.CurrentScreenManagerInstance == null) {
            CurrentScreenManager.CurrentScreenManagerInstance = new CurrentScreenManager();
            this.CurrentScreenManagerInstance.loadDataFromLocal();
        }
        return this.CurrentScreenManagerInstance;
    }

    getCurrentScreen() {
        return this.currentScreen;
    }
    updateCurrentScreen(currentScreen) {
        this.currentScreen = currentScreen;
        this.updateDataToLocal();
    }
    // deleteCurrentScreen(){
    //     this.currentScreen = false;
    //     this.updateDataToLocal();
    // }
    updateDataToLocal() {

        localStorage.removeItem("CurrentScreen")
        localStorage.setItem("CurrentScreen", this.currentScreen)

        this.listenChange()
    }
    loadDataFromLocal() {

        var result = localStorage.getItem("CurrentScreen");
        if (result !== undefined) {

            this.currentScreen = result

        } else {
            this.currentScreen = 1
        }
        this.listenChange()
    }

    listenChange() {
        this.Observers.map(
            (o, index, arr) => {
                if (o.onCurrentScreenChanged) {
                    o.onCurrentScreenChanged(this)
                }
            }
        )
    }
}