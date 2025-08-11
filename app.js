if (
  document.getElementById("sorting-table") &&
  typeof simpleDatatables.DataTable !== "undefined"
) {
  const dataTable = new simpleDatatables.DataTable("#sorting-table", {
    searchable: false,
    perPageSelect: false,
    sortable: true,
  });
}

const options = {
  colors: ["#facc15", "#0f172a"],
  series: [
    {
      name: "استراحت",
      color: "#facc15",
      data: [
        { x: "شنبه", y: 250 },
        { x: "یک", y: 160 },
        { x: "دو", y: 200 },
        { x: "سه", y: 250 },
        { x: "چهار", y: 280 },
        { x: "پنج", y: 160 },
        { x: "جمعه", y: 400 },
      ],
    },
    {
      name: "استراحت",
      color: "#0f172a",
      data: [
        { x: "شنبه", y: 320 },
        { x: "یک", y: 234 },
        { x: "دو", y: 250 },
        { x: "سه", y: 300 },
        { x: "چهار", y: 320 },
        { x: "پنج", y: 220 },
        { x: "جمعه", y: 200 },
      ],
    },
  ],
  chart: {
    type: "bar",
    height: "263px",
    fontFamily: "Inter, sans-serif",
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "70%",
      borderRadiusApplication: "end",
      borderRadius: 8,
    },
  },
  tooltip: {
    shared: true,
    intersect: false,
    style: {
      fontFamily: "Inter, sans-serif",
    },
  },
  states: {
    hover: {
      filter: {
        type: "darken",
        value: 1,
      },
    },
  },
  stroke: {
    show: true,
    width: 0,
    colors: ["transparent"],
  },
  grid: {
    show: false,
    strokeDashArray: 4,
    padding: {
      left: 2,
      right: 2,
      top: -14,
    },
  },
  dataLabels: {
    enabled: false,
  },
  legend: {
    show: false,
  },
  xaxis: {
    floating: false,
    labels: {
      show: true,
      style: {
        fontFamily: "Vazir",
        cssClass: "text-xs font-normal fill-stone-700 tracking-tighter",
      },
      fill: "#fff",
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    show: false,
  },
  fill: {
    opacity: 1,
  },
};

if (
  document.getElementById("column-chart") &&
  typeof ApexCharts !== "undefined"
) {
  const chart = new ApexCharts(
    document.getElementById("column-chart"),
    options
  );
  chart.render();
}

const options2 = {
  // add data series via arrays, learn more here: https://apexcharts.com/docs/series/
  series: [
    {
      name: "Developer Edition",
      data: [1500, 1418, 1456, 1526, 1356, 1256],
      color: "#1A56DB",
    },
    {
      name: "Designer Edition",
      data: [643, 413, 765, 412, 1423, 1731],
      color: "#7E3BF2",
    },
  ],
  chart: {
    height: "282px",
    maxWidth: "100%",
    type: "area",
    fontFamily: "Inter, sans-serif",
    dropShadow: {
      enabled: false,
    },
    toolbar: {
      show: false,
    },
  },
  tooltip: {
    enabled: true,
    x: {
      show: false,
    },
  },
  legend: {
    show: false,
  },
  fill: {
    type: "gradient",
    gradient: {
      opacityFrom: 0.55,
      opacityTo: 0,
      shade: "#1C64F2",
      gradientToColors: ["#1C64F2"],
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    width: 6,
  },
  grid: {
    show: false,
    strokeDashArray: 4,
    padding: {
      left: 2,
      right: 2,
      top: 0,
    },
  },
  xaxis: {
    categories: [
      "01 February",
      "02 February",
      "03 February",
      "04 February",
      "05 February",
      "06 February",
      "07 February",
    ],
    labels: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    show: false,
    labels: {
      formatter: function (value) {
        return "$" + value;
      },
    },
  },
};

if (
  document.getElementById("data-series-chart") &&
  typeof ApexCharts !== "undefined"
) {
  const chart = new ApexCharts(
    document.getElementById("data-series-chart"),
    options2
  );
  chart.render();
}

const getChartOptions = () => {
  return {
    series: [90, 85, 70],
    colors: ["#334155", "#292524", "#facc15"],
    chart: {
      height: "200px",
      width: "100%",
      type: "radialBar",
      sparkline: {
        enabled: true,
      },
    },
    plotOptions: {
      radialBar: {
        track: {
          background: "#E5E7EB",
        },
        dataLabels: {
          show: false,
        },
        hollow: {
          margin: 0,
          size: "32%",
        },
      },
    },
    grid: {
      show: false,
      strokeDashArray: 4,
      padding: {
        left: 2,
        right: 2,
        top: -23,
        bottom: -20,
      },
    },
    labels: ["Done", "In progress", "To do"],
    legend: {
      show: true,
      position: "bottom",
      fontFamily: "Inter, sans-serif",
    },
    tooltip: {
      enabled: true,
      x: {
        show: false,
      },
    },
    yaxis: {
      show: false,
      labels: {
        formatter: function (value) {
          return value + "%";
        },
      },
    },
  };
};

if (
  document.getElementById("radial-chart") &&
  typeof ApexCharts !== "undefined"
) {
  const chart = new ApexCharts(
    document.querySelector("#radial-chart"),
    getChartOptions()
  );
  chart.render();
}

const submit = document.getElementById("submit");
const phoneInput = document.getElementById("phone");
const popUpModal = document.getElementById("popup-modal");
const doneButton = document.getElementById("done-button");
const errorSpan = document.getElementById("error-span");
const toast = document.getElementById("toast");
const enter = document.getElementById("enter-btn");

submit?.addEventListener("click", (event) => {
  event.preventDefault();
  if (phoneInput.value.length < 11 || phoneInput.value.length > 11) {
    console.log("ERROR");
    errorSpan.classList.remove("hidden");
  } else {
    errorSpan.classList.add("hidden");
    popUpModal.classList.remove("hidden");
    popUpModal.classList.add("flex");
    popUpModal.classList.add("items-center justify-center");
  }
});

doneButton?.addEventListener("click", () => {
  popUpModal.classList.add("hidden");
  phoneInput.value = "";
});

enter.addEventListener("click", (event) => {
  console.log("toast toast");
  toast?.classList.remove("hidden");
});

function toggleAccordion(index) {
  const content = document.getElementById(`content-${index}`);
  const icon = document.getElementById(`icon-${index}`);

  // SVG for Minus icon
  const minusSVG = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4">
        <path d="M3.75 7.25a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5Z" />
      </svg>
    `;

  // SVG for Plus icon
  const plusSVG = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4">
        <path d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z" />
      </svg>
    `;

  // Toggle the content's max-height for smooth opening and closing
  if (content.style.maxHeight && content.style.maxHeight !== "0px") {
    content.style.maxHeight = "0";
    icon.innerHTML = plusSVG;
  } else {
    content.style.maxHeight = content.scrollHeight + "px";
    icon.innerHTML = minusSVG;
  }
}
