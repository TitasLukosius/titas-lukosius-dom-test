class ApartmentGridComponent {
    constructor() {
        this.state = {
            loading: false,
            apartments: []
        }
        this.init();
    }

    getApartments = () => setTimeout(() => {
        API.fetchApartments(
            (apartments) => {
                this.state.loading = false;
                this.saveApartments(apartments);
            },
            (error) => {
                console.log(error);
                alert(error);
                this.state.loading = false;
                this.render();
            }
        );
    }, 1000);

    saveApartments = (apartments) => {
        this.state.apartments = apartments;

        this.render();
    }

    deleteApartment = (id) => {
        API.deleteApartment(
            id,
            () => API.fetchApartments(this.getApartments, alert),
            alert
        )
    }

    wrapElement = (element) => {
        const column = document.createElement('div');
        column.className = 'col-12 col-sm-6 col-lg-4 col-xl-3';
        column.appendChild(element);
        return column;

    }

    init = () => {
        this.state.loading = true;
        this.getApartments();
        this.htmlElement = document.createElement('div');
        this.htmlElement.className = 'row g-2';

        this.render();
    }

    render = () => {
        if(this.state.loading) {
            this.htmlElement.innerHTML = `<div class="text-center"><img src="assets/loader.gif"/></div>`
        } else if(this.state.apartments.length > 0) {
            this.htmlElement.innerHTML = '';
            const allApartments = this.state.apartments.map(({id, ...props}) => new ApartmentCardComponent({
                ...props,
                onDelete: () => this.deleteApartment(id)
            }));
            const allApartmentsHTML = allApartments.map(apartment => apartment.htmlElement);
            const wrappedApartments = allApartmentsHTML.map(this.wrapElement);
            this.htmlElement.append(...wrappedApartments);
        } else {
            this.htmlElement.innerHTML = '<p class="h2">Šiuo metu apartamentų nėra</p>'
        }
    }
}