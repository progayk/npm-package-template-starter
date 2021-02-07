class Getiryemek {
    APP_SECRET_KEY: string = '';
    targetUrl: string;
    constructor(targetUrl: string) {
        this.targetUrl = targetUrl;
    }

    login() {}

    print() {
        return this.targetUrl
    }
}

export default Getiryemek