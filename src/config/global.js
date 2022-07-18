export default {
  global: {
    componenteFormativo: 'Análisis financiero en la unidad productiva',
    descripcionCurso:
      'En este componente formativo hay información, en su mayoría cuantitativa, que aporta al desarrollo empresarial a través de la toma de decisiones. Notará que en las organizaciones todo es susceptible de ser medido y evaluado, en cada hallazgo hay una oportunidad de mejora que conlleva a transformaciones que hacen parte del crecimiento de la empresa.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Análisis financiero',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Revelaciones',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Indicadores financieros',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Matemática financiera',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Evaluación financiera y social',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Calvo, C.  (s.f.). Análisis e interpretación de los estados financieros.',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/40674',
    },
    {
      referencia:
        'Carreño, J. (2015). Importancia de las revelaciones en los estados financieros bajo NIIF para la toma de decisiones. Universidad Militar Nueva Granada..',
      link: 'https://repository.unimilitar.edu.co/handle/10654/7236',
    },
    {
      referencia:
        'Sapag, N., Sapag, R., y Sapag, J. (s. f.). Preparación y evaluación de proyectos. Universidad de Chile.',
      link:
        'http://repositorio.uasb.edu.bo:8080/bitstream/54000/1243/1/Sapag-proyectos%206ta%20edici%C3%B3n.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Contabilidad',
      significado:
        'técnica que permite ordenar, clasificar y agrupar información contable con el fin de informar mediante estados financieros sobre los bienes que posee la empresa o activos, así como de la financiación  en que ha incurrido la organización y de los bienes que propios o aportados a los socios.',
    },
    {
      termino: 'CTCP',
      significado:
        'Consejo Técnico de Contaduría Pública conformado en el año 2010 y encargado de reglamentar la ley a principios, posteriores comités técnicos del sector productivo y financiero y el MinCIT expide el Decreto 4926 para la aplicación voluntaria de las normas internacionales de información financiera.',
    },
    {
      termino: 'Depreciación',
      significado:
        'corresponde al gasto o pérdida de valor de los activos por su uso.',
    },
    {
      termino: 'Estados financieros',
      significado:
        'informes cuantitativos que consolidan información referente a la gestión de recursos a través de la operación de la empresa.',
    },
    {
      termino: 'Finanzas',
      significado:
        'área de la economía que estudia la gestión del dinero y el capital, es decir, los recursos financieros. Estudia la obtención de esos recursos como su financiación, así como la inversión y la forma de producir riqueza con el capital de los accionistas o inversionistas.',
    },
    {
      termino: 'Ingresos y gastos sujetos a impuestos',
      significado:
        'son todos aquellos que aumentan o disminuyen la utilidad contable de la empresa.',
    },
    {
      termino: 'Gastos no desembolsables',
      significado:
        'son gastos deducibles en cuanto a tributación que no ocasionan erogaciones de dinero entre ellos están la depreciación, la amortización de los activos intangibles o el valor en libros del activo que se vende.',
    },
    {
      termino: 'Globalización',
      significado:
        'es un proceso de rompimiento de las barreras económicas que conllevan a una situación de mercado y apertura económica donde el mercado nacional se orienta al ámbito internacional para la generación de riqueza.',
    },
    {
      termino: 'IASB',
      significado:
        'International Accounting Standards Committee, significa Junta de Normas Internacionales de Contabilidad, es un organismo independiente del sector privado que desarrolla y aprueba las Normas Internacionales de Información Financiera.',
    },
    {
      termino: 'IFRS',
      significado:
        'International Financial Reporting Standars o IAS International Accouting Standards y en conjunto se denominan IFRS. Establecen los requisitos de reconocimiento, medición, presentación e información a revelar que se refieren a las transacciones y sucesos económicos que son relevantes en los estados financieros.',
    },
    {
      termino: 'NIC',
      significado: 'Normas Internacionales de Contabilidad.',
    },
    {
      termino: 'NIF',
      significado:
        'abreviatura de Normas de Información Internacional Financiera (NIIF) y Normas Información Financiera (NIF).',
    },
    {
      termino: 'NIIF',
      significado:
        'son las normas e interpretaciones adoptadas por la Junta de Normas Internacionales de Contabilidad (IASB). Esas normas comprenden:<br>· Las Normas Internacionales de Información Financiera;<br>· Las Normas Internacionales de Contabilidad; y<br>· Las Interpretaciones elaboradas por el Comité de Interpretaciones de las Normas Internacionales de Información Financiera (CINIIF-IFRIC) o el antiguo Comité de Interpretaciones (SIC).',
    },
    {
      termino: 'Precios sombra',
      significado:
        'valor que representa un bien determinado debido a que no se encuentra precio definido a dicho bien en el mercado.',
    },
    {
      termino: 'Revelaciones',
      significado:
        'notas que deben incluir el resumen de políticas contables más relevantes y demás información que sea considerada necesaria para la comprensión de la información financiera, información comparativa y el estado de situación financiera de inicio del periodo cuando en los estados financieros se trate una información retroactiva o una reexpresión retroactiva de los estados financieros. Da a conocer a los usuarios de la información cifras y datos sobre hechos y acontecimientos que desconocían acerca de la empresa con el fin de hacerla más comprensible.',
    },
    {
      termino: 'Tasa de descuento',
      significado:
        'tasa o costo de capital que permite conocer el valor presente de unos flujos de caja futuros.',
    },
  ],
  complementario: [
    {
      tema: 'Análisis financiero',
      referencia:
        'Congreso de Colombia. (2009). Ley 1314 del 2009. Por la cual se regulan los principios y normas de contabilidad e información financiera y de aseguramiento de información aceptados en Colombia, se señalan las autoridades competentes, el procedimiento para su expedición y se determinan las entidades responsables de vigilar su cumplimiento.',
      tipo: 'Ley',
      link:
        'http://www.secretariasenado.gov.co/senado/basedoc/ley_1314_2009.html',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Abel Fernando Becerra Carrillo',
        cargo: 'Experto Temático',
        centro:
          'Regional Norte de Santander - Centro de la Industria, la Empresa y los Servicios',
      },
      {
        nombre: 'Fabiola Sierra Sarmiento',
        cargo: 'Experta Temática',
        centro:
          'Regional Norte de Santander - Centro de la Industria, la Empresa y los Servicios',
      },
      {
        nombre: 'Jair Yovanny Castro Morales',
        cargo: 'Experto Temático',
        centro: 'Regional Tolima - Centro Agropecuario La Granja',
      },
      {
        nombre: 'Norma Constanza Morales Cruz',
        cargo: 'Experta Temática',
        centro: 'Centro de comercio y servicios',
      },
      {
        nombre: 'Miroslava González Hernández',
        cargo: 'Diseñadora Instruccional',
        centro:
          'Regional Norte de Santander - Centro de la Industria, la Empresa y los Servicios',
      },
      {
        nombre: 'Leydy Jhuliana Jaramillo Mejía',
        cargo: 'Diseñadora instruccional',
        centro: 'Regional Distrito Capital - Centro de Gestión Industrial',
      },
      {
        nombre: 'Andrés Felipe Velandia Espitia',
        cargo: 'Asesor Metodológico',
        centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
      },
      {
        nombre: 'José Gabriel Ortiz Abella',
        cargo: 'Corrector de estilo',
        centro: 'Regional Distrito Capital - Centro de Diseño y Metrología.',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'María Natalia Maldonado Delgado',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Diego Fernando Velasco Güiza',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
