class ApartmentCardComponent {
    constructor(props) {
        this.props = props;
        this.init();
    }

    init = () => {
        this.htmlElement = document.createElement('article');
        this.htmlElement.className = 'card p-3 shadow';
        this.htmlElement.innerHTML = `
        <p>Klasika</p>
        `
    }
}