class HelloWorld extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }
    static version = 'v1.2.3'
    connectedCallback() {
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    font-family: sans-serif;
                    text-align: center;
                }
            </style>
            <h1>Hello, World!</h1>
        `;
    }
}

customElements.define('hello-world', HelloWorld);

const helloWorldy = await customElements.whenDefined('hello-world')
console.log(helloWorldy.version) // v1.2.3