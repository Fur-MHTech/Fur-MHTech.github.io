const headerTemplate = document.createElement("template");

headerTemplate.innerHTML = `
  <style>
    header {
        color: #396543;
        background-color: #ccdace;
        padding: 15px 0px 0px;
    }

    header h1 {
        text-align: center;
        margin-top: 0px;
        margin-bottom: 2px;
    }

    nav {
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    ul {
      padding: 0;
    }
    
    ul li {
      list-style: none;
      display: inline;
    }
    
    a {
      font-weight: 700;
      margin: 0 25px;
      color: #396543;
      text-decoration: none;
      padding-top: 0.25em;
      padding-left: 0.25em;
      padding-right: 0.25em;
      border-radius: 5px;
    }
    
    a:hover {
        color: #000;
        background-color: #fff;
      padding-bottom: 5px;
      box-shadow: inset 0 -2px 0 0 #fff;
    }
  </style>
  <header>
    <h1>MindBloom</h1>
    <nav>
      <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="policy.html">Policy</a></li>
      </ul>
    </nav>
  </header>
`;

class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: "closed" });

    shadowRoot.appendChild(headerTemplate.content);
  }
}

customElements.define("header-component", Header);
