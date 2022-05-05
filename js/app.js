Vue.component("hector-tabla", {
  props: {
    subtitulo: String,
    titulos: {
      type: Array,
    },
    filas: {
      type: Array,
    },
    clases: {
      type: Object,
      default: () => ({}),
    },
  },
  template: `
    <div>
      <table :class="clases">
        <caption v-if="!!subtitulo"> {{subtitulo}} </caption>
        <thead>
          <tr>
            <th scope="col" v-for="(item, i) in titulos" :key="i">{{item}}</th>            
          </tr>
        </thead>
        <tbody>
          <tr v-for="(fila, ii) in filas" :key="ii">
            <td v-for="(dato, iii) in fila" :key="iii"> {{dato}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  `,
});

const app = new Vue({
  el: "#app",
  data: {
    tablas: [
      {
        numero: 0,
        clases: {
          table: true,
          "table-responsive": true,
          "table-sm": false,
          "table-borderless": true,
          "table-bordered": false,
          "table-hover": false,
        },
        titulos: ["#", "codigo postal", "Nombre", "Región"],
        filas: [
          ["1", "1220-8810", "Samson Gallagher", "Xīnán"],
          ["2", "32437758", "Yvonne Reid", "Jammu and Kashmir"],
          ["3", "95213", "Felix Figueroa", "Alberta"],
          ["4", "2331", "Riley Shaffer", "Östergötlands län"],
          ["5", "69551", "Indira Talley", "South Sulawesi"],
        ],
        subtitulo:
          "Datos generados aliatoriamente en https://generatedata.com/generator",
      },
      {
        numero: 1,
        clases: {
          table: true,
          "table-responsive": true,
          "table-sm": false,
          "table-striped": true,
          "table-dark": true,
          "table-borderless": true,
          "table-bordered": false,
          "table-hover": false,
        },
        titulos: ["#", "codigo postal", "Nombre", "Región"],
        filas: [
          ["1", "1220-8810", "Samson Gallagher", "Xīnán"],
          ["2", "32437758", "Yvonne Reid", "Jammu and Kashmir"],
          ["3", "95213", "Felix Figueroa", "Alberta"],
          ["4", "2331", "Riley Shaffer", "Östergötlands län"],
          ["5", "69551", "Indira Talley", "South Sulawesi"],
        ],
        subtitulo:
          "Datos generados aliatoriamente en https://generatedata.com/generator",
      },
      {
        numero: 2,
        clases: {
          table: true,
          "text-success": true,
          "table-responsive": true,
          "table-sm": true,
          "table-danger": true,
          "table-striped": true,
          "table-dark": false,
          "table-borderless": false,
          "table-bordered": false,
          "table-hover": false,
        },
        titulos: ["id", "Empresa", "Ciudad", "Región"],
        filas: [
          [
            "71B05E5C7C25",
            "Turpis Vitae Institute",
            "San Fernando",
            "Tarapacá",
          ],
          ["94F36DEC7AD6", "Ornare Fusce Limited", "Illapel", "Biobío"],
          [
            "A59A341BE843",
            "Non Enim Corp.",
            "Quinta de Tilcoco",
            "Metropolitana de Santiago",
          ],
          ["7D4B5E545E6B", "Lobortis Foundation", "Cochrane", "Los Ríos"],
          [
            "8D65565B8CF7",
            "Ipsum Leo Elementum Corporation",
            "Lampa",
            "Biobío",
          ],
          ["68B21196C445", "Ipsum Dolor Corp.", "La Serena", "O'Higgins"],
          ["8ED2A2060D0F", "Magna Corp.", "Vallenar", "Tarapacá"],
          ["07628D579844", "Dis Incorporated", "Paiguano", "Maule"],
          ["CB0DEE5DEB61", "Libero At Associates", "San Clemente", "Atacama"],
          [
            "71BBAD1E4989",
            "Semper Dui Lectus Foundation",
            "San Joaquín",
            "Antofagasta",
          ],
        ],
        subtitulo:
          "Datos generados aliatoriamente en https://generatedata.com/generator",
      },
    ],
  },
});
