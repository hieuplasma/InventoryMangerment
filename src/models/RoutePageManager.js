export default class RoutePageManager {
    static RoutePageManagerInstance = null;
    routePage = "1"
    Observers = [];
    addObserver(observer) {
        this.Observers[this.Observers.length] = observer
    }
    removeObserver(o) {
        this.Observers = this.Observers.filter((observer) => observer != o);
    }
    static getRoutePageManagerInstance() {
        if (RoutePageManager.RoutePageManagerInstance == null) {
            RoutePageManager.RoutePageManagerInstance = new RoutePageManager();
            this.RoutePageManagerInstance.loadDataFromLocal();
        }
        return this.RoutePageManagerInstance;
    }

    getRoutePage() {
        return this.routePage;
    }
    updateRoutePage(routePage) {
        this.routePage = routePage;
        this.updateDataToLocal();
    }
    // deleteRoutePage(){
    //     this.routePage = false;
    //     this.updateDataToLocal();
    // }
    updateDataToLocal() {

        localStorage.removeItem("RoutePage")
        localStorage.setItem("RoutePage", this.routePage)

        this.listenChange()
    }
    loadDataFromLocal() {

        var result = localStorage.getItem("RoutePage");
        if (result !== undefined && result != null) {
            this.routePage = result
        } else {
            this.routePage = "1"
        }
        this.listenChange()
    }

    listenChange() {
        this.Observers.map(
            (o, index, arr) => {
                if (o.onRoutePageChanged) {
                    o.onRoutePageChanged(this)
                }
            }
        )
    }
}