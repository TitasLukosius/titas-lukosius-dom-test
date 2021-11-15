class ApartmentGridComponent {
    constructor() {
        this.state = {
            loading: false,
            apartments: []
        }
        this.init();
    }

    getApartments = () => API.fetchApartments(this.saveApartments, this.showError)

    saveApartments = (apartments) => {
        this.state.apartments = apartments;
        this.state.loading = false;

        this.render();
    }

    init = () => {
        this.state.loading = true;
        this.getApartments();


        this.htmlElement = document.createElement('div');
        this.htmlElement.innerHTML = 'PaEjO';

        this.render();
    }

    render = () => {
        // console.log(this.state.apartments);
        if(this.state.loading) {
            this.htmlElement.innerHTML = 'siunčiama...';
        } else {
            this.htmlElement.innerHTML = 'parsiųsta!';

        }
    }
}