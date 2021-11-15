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

    wrapElement = (element) => {
        const column = document.createElement('div');
        column.className = 'col-12 col-sm-6 col-lg-4 col-xl-3';
        column.appendChild(element);
        return column

    }

    init = () => {
        this.state.loading = true;
        this.getApartments();
        this.htmlElement = document.createElement('div');
        this.htmlElement.className = 'row g-1';
        this.htmlElement.innerHTML = 'PaEjO';

        this.render();
    }

    render = () => {
        // console.log(this.state.apartments);
        if(this.state.loading) {
            this.htmlElement.innerHTML = `<div class="text-center"><img src="assets/loader.gif"/></div>`
        } else if(this.state.apartments.length > 0) {
            this.htmlElement.innerHTML = '';
            const allApartments = this.state.apartments.map(apartment => new ApartmentCardComponent(apartment));
            // console.log(allApartments);
            const allApartmentsHTML = allApartments.map(apartment => apartment.htmlElement);
            const wrappedApartments = allApartmentsHTML.map(this.wrapElement);
            this.htmlElement.append(...wrappedApartments);
        } else {
            this.htmlElement.innerHTML = '<p class="h2">Šiuo metu apartamentų nėra</p>'
        }
    }
}