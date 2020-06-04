am4core.ready(function () {
  am4core.useTheme(am4themes_animated);
  am4core.options.autoSetClassName = true;

  // Create chart instance
  var chart = am4core.create("dateAxisChartdiv", am4charts.XYChart);
  chart.colors.step = 2;
  chart.maskBullets = false;

  var DATAEXCELFORMAT = DATAEXCEL.map((item) => {
    let calcBullet = (parseFloat(item.MediaM) / 100).toFixed(1);
    let ver = { calcBullet: calcBullet };
    return { ...item, ...ver };
  });

  chart.data = DATAEXCELFORMAT;

  // Add legend
  chart.legend = new am4charts.Legend();
  chart.legend.fontSize = 10;

  // Add category axis
  var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
  categoryAxis.dataFields.category = "NomeCluster";
  categoryAxis.renderer.grid.template.location = 0;
  categoryAxis.renderer.minGridDistance = 50;
  categoryAxis.renderer.grid.template.disabled = true;
  categoryAxis.renderer.fullWidthTooltip = true;

  // Add value axis
  var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
  //valueAxis.title.text = "Quantidade";
  valueAxis.fontSize = 10;

  // Add series
  var series = chart.series.push(new am4charts.ColumnSeries());
  series.name = "Cluster";
  series.dataFields.categoryX = "NomeCluster";
  series.dataFields.valueY = "QtdClientes";
  series.columns.template.fillOpacity = 0.7;
  series.columns.template.propertyFields.fill = "color";
  series.columns.template.propertyFields.stroke = "color";
  series.columns.template.events.on(
    "hit",
    function (ev) {
      console.warn("clicked on ", ev);
      alert(`column ${ev.target._uid}`);
    },
    this
  );
  series.sequencedInterpolation = true;
  series.columns.template.tooltipText =
    "[bold]{name} {categoryX}[/]\n[font-size:14px]{valueY} clientes";

  /*SOMATORIO*/

  var somatorioAxis = chart.yAxes.push(new am4charts.ValueAxis());
  somatorioAxis.renderer.grid.template.disabled = true;
  somatorioAxis.renderer.labels.template.disabled = false;
  somatorioAxis.renderer.opposite = true;
  //somatorioAxis.title.text = "Somatorio";
  somatorioAxis.fontSize = 10;

  var somatorioSeries = chart.series.push(new am4charts.LineSeries());
  somatorioSeries.id = "g4";

  somatorioSeries.dataFields.categoryX = "NomeCluster";
  somatorioSeries.dataFields.valueY = "SomatorioM";

  somatorioSeries.yAxis = somatorioAxis;
  somatorioSeries.name = "Somatorio";
  somatorioSeries.strokeWidth = 2;
  somatorioSeries.tooltipText = "Somatorio: {valueY} ({NomeCluster})";

  var somatorioBullet = somatorioSeries.bullets.push(new am4charts.Bullet());

  var somatorioRectangle = somatorioBullet.createChild(am4core.Rectangle);
  somatorioRectangle.horizontalCenter = "middle";
  somatorioRectangle.verticalCenter = "middle";
  somatorioRectangle.width = 7;
  somatorioRectangle.height = 7;
  somatorioRectangle.width = 7;
  somatorioRectangle.height = 7;

  var somatorioState = somatorioBullet.states.create("hover");
  somatorioState.properties.scale = 1.2;

  var somatorioLabel = somatorioSeries.bullets.push(
    new am4charts.LabelBullet()
  );
  // somatorioLabel.label.text = "{NomeCluster}";
  somatorioLabel.label.horizontalCenter = "left";
  somatorioLabel.label.dx = 14;

  /*MEDIA M */
  var mediaMAxis = chart.yAxes.push(new am4charts.ValueAxis());
  mediaMAxis.renderer.grid.template.disabled = true;
  mediaMAxis.renderer.labels.template.disabled = false;
  mediaMAxis.renderer.opposite = true;
  mediaMAxis.fontSize = 12;
  //  mediaMAxis.title.text = "MédiaM";

  var mediaMSeries = chart.series.push(new am4charts.LineSeries());
  mediaMSeries.id = "g2";

  mediaMSeries.dataFields.categoryX = "NomeCluster";
  mediaMSeries.dataFields.valueY = "MediaM";

  mediaMSeries.yAxis = mediaMAxis;
  mediaMSeries.name = "MediaM";
  mediaMSeries.strokeWidth = 2;
  mediaMSeries.tooltipText = "MediaM: {valueY} ({NomeCluster})";

  var mediaMBullet = mediaMSeries.bullets.push(new am4charts.CircleBullet());
  mediaMBullet.circle.fill = am4core.color("#fff");
  mediaMBullet.circle.strokeWidth = 2;
  mediaMBullet.circle.propertyFields.radius = "calcBullet";
  mediaMBullet.events.on(
    "hit",
    (ev) => {
      const val = ev.target._uid;
      alert(`Bullet ${val}`);
      console.info(val);
    },
    this
  );
  var mediaMState = mediaMBullet.states.create("hover");
  mediaMState.properties.scale = 1.2;

  var mediaMLabel = mediaMSeries.bullets.push(new am4charts.LabelBullet());
  //mediaMLabel.label.text = "{NomeCluster}";
  mediaMLabel.label.horizontalCenter = "left";
  mediaMLabel.label.dx = 14;

  var legend = new am4charts.Legend();
  legend.parent = chart.chartContainer;
  legend.align = "bottom";
  legend.valign = "bottom";
  legend.marginTop = "5px";
  legend.fontSize = 10;

  series.events.on("ready", function (ev) {
    var legenddata = [];
    var teste = [];
    var sequenceNumber = [];
    var sumValue = [];

    function toggleSlice(item) {
      var column = series.dataItems.getIndex(item);
      if (column.visible) {
        column.hide();
      } else {
        column.show();
      }
    }

    series.columns.each(function (column, i) {
      let value = parseFloat(column.dataItem.column.dataItem.valueY);
      let nameCategory =
        column.dataItem.column.dataItem.dataContext.Interpretacao;
      let fill = column.fill.hex;

      if (!teste[fill]) teste[fill] = [];
      teste[fill] = {
        name: nameCategory,
        fill: fill,
      };

      if (!sequenceNumber[fill]) sequenceNumber[fill] = [];
      sequenceNumber[fill].push(i);

      if (!sumValue[fill]) sumValue[fill] = [];
      sumValue[fill].push(value);

      legenddata.push({
        name: nameCategory,
        fill: fill,
      });
    });

    teste2 = Object.keys(teste).map((el) => {
      let valueColumn = sumValue[el].reduce((a, b) => a + b, 0).toFixed(0);
      teste[el].name = teste[el].name;
      let dataSequence = { sequence: sequenceNumber[el] };
      return { ...teste[el], ...dataSequence };
    });

    legend.data = teste2;

    legend.itemContainers.template.events.on("hit", function (ev) {
      let sequenceItem = ev.target.dataItem._dataContext.sequence;
      sequenceItem.map((el) => {
        //hidden
        toggleSlice(el);
      });
    });

    console.log(teste2);
  });

  // Add cursor
  chart.cursor = new am4charts.XYCursor();
  chart.cursor.fullWidthLineX = true;
  chart.cursor.xAxis = categoryAxis;
  chart.cursor.lineX.strokeOpacity = 0;
  chart.cursor.lineX.fill = am4core.color("#000");
  chart.cursor.lineX.fillOpacity = 0.1;
});
