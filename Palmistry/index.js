




///////// D3 START /////////////

var svg = d3
  .select("body")
  .append("svg")
  .attr("height", "100%")
  .attr("width", "100%")
  .attr("preserveAspectRatio", "xMinYMin meet")
  .attr("viewBox", "0 0 600 845");

var starGroup = svg.append("g");

var nuStarGroup = svg.append("g");

var handGroup = svg.append("g").attr("class", "hand");

var tooltip = d3
  .select("body")
  .append("div")
  .style("opacity", "0")
  .style("position", "absolute");

/////Tooltip////////

var box = svg.append("g").attr("transform", "translate(645,90)");

box
  .append("rect")
  .attr("height", 650)
  .attr("width", 620)
  .attr("class", "baseRect")
  .style("stroke", "black")
  .style("fill", "white");

box
  .append("rect")
  .attr("height", 610)
  .attr("width", 580)
  .style("stroke", "black")
  .attr("class", "layerRect")
  .style("fill", "none")
  .attr("transform", "translate(20,20)")
  .style("stroke-width", "2px");

box
  .append("rect")
  .attr("height", 620)
  .attr("width", 590)
  .style("stroke", "black")
  .attr("class", "layerRect")
  .style("fill", "none")
  .attr("transform", "translate(15,15)")
  .style("stroke-width", "2px");

box
  .append("rect")
  .attr("height", 630)
  .attr("width", 600)
  .style("stroke", "black")
  .attr("class", "layerRect")
  .style("fill", "none")
  .attr("transform", "translate(10,10)")
  .style("stroke-width", "2px");

box
  .append("rect")
  .attr("height", 640)
  .attr("width", 610)
  .style("stroke", "black")
  .attr("class", "layerRect")
  .style("fill", "none")
  .attr("transform", "translate(5,5)")
  .style("stroke-width", "2px");

box
  .append("foreignObject")
  .attr("transform", "translate(35,15)")
  .attr("width", 550)
  .attr("height", 600)
  .append("xhtml:body")
  .attr("class", "nutext")
  .style("font", "14px 'Helvetica'")
  .html(instruxTXT);

box
  .append("circle")
  .attr("class", "moundEX")
  .attr("cx", "415")
  .attr("cy", "260")
  .attr("r", "40")
  .on("click", moundExClick);

box
  .append("line")
  .attr("x1", "110")
  .attr("y1", "260")
  .attr("x2", "230")
  .attr("y2", "260")
  .attr("class", "lineEXAMPLE")
  .on("click", lineExClick);

box
  .append("text")
  .attr("x", 393)
  .attr("y", 264)
  .attr("class", "moundText")
  .text("MOUND")
  .attr("font-family", "Helvetica")
  .attr("font-weight", "bold")
  .attr("font-size", "12px")
  .attr("fill", "#b8b8b8");

//// COMET EASTER EGG  ////

starGroup
  .selectAll("path.comet")
  .data(comet)
  .enter()
  .append("path")
  .attr("class", "comet")
  .attr("fill", "black")
  .attr("stroke", "white")
  .attr("transform", "rotate(30)")
  .attr("d", comet);

starGroup
  .selectAll("path.comettwo")
  .data(comet)
  .enter()
  .append("path")
  .attr("class", "comettwo")
  .attr("fill", "black")
  .attr("stroke", "white")
  .attr("d", comet);

//// NU STARS ////

nuStarGroup
  .selectAll("polygon.nustar")
  .data(nuStarsPolys)
  .enter()
  .append("polygon")
  .attr("class", "nustar")
  .attr("points", (d) => d.points)
  .attr("stroke", "white");

nuStarGroup
  .selectAll("ellipse")
  .data(nuStarsEllipses)
  .enter()
  .append("ellipse")
  .attr("cx", (d) => d.cx)
  .attr("cy", (d) => d.cy)
  .attr("rx", (d) => d.rx)
  .attr("ry", (d) => d.ry)
  //.attr("transform-box", "fill-box")
  //.attr("transform", d => d.transform)
  //.attr("transform", d => d.rotate)
  .attr("stroke", "#cccccc")
  .attr("fill", "none");

nuStarGroup
  .selectAll("circle")
  .data(nuStarsCircs)
  .enter()
  .append("circle")
  .attr("class", "nustarcircs")
  .attr("cx", (d) => d.cx)
  .attr("cy", (d) => d.cy)
  .attr("r", (d) => d.r)
  .attr("stroke", "white")
  .attr("transform", "translate(11 8)");

//// PALM /////

handGroup.append("path").attr("class", "palmfill").attr("d", palmfill);

handGroup
  .append("path")
  .attr("class", "palm")
  .attr("fill", "blue")
  .attr("stroke", "blue")
  .attr("d", palmfix);

/////// STUMP ///////

handGroup
  .append("ellipse")
  .attr("class", "stump")
  .attr("cx", "95.23")
  .attr("cy", "9.61")
  .attr("rx", "96.23")
  .attr("ry", "9.61")
  .attr("transform", "translate(144 675) rotate(0)")
  .attr("fill", "#4f4f4f");

handGroup
  .append("ellipse")
  .attr("class", "stump")
  .attr("cx", "96.7")
  .attr("cy", "9.61")
  .attr("rx", "24.32")
  .attr("ry", "5.21")
  .attr("transform", "translate(144 675) rotate(0)")
  .attr("fill", "grey");

handGroup
  .append("ellipse")
  .attr("class", "stump")
  .attr("cx", "96.7")
  .attr("cy", "9.61")
  .attr("rx", "13.23")
  .attr("ry", "3.44")
  .attr("transform", "translate(144 675) rotate(0)")
  .attr("fill", "white");

var planetSwitchII = starGroup
  .append("circle")
  .attr("class", "planetII")
  .attr("cx", "1220")
  .attr("cy", "441.46")
  .attr("fill", "url(#svgGradientII)")
  .attr("transform", "translate(136.64 15.07)")
  .attr("r", "15.22")
  .on("click", planetClickII);
//.on("click",mountofMercuryClick);

var planetSwitch = starGroup
  .append("circle")
  .attr("class", "planet")
  .attr("cx", "1220")
  .attr("cy", "441.46")
  .attr("fill", "url(#svgGradient)")
  .attr("transform", "translate(136.64 15.07)")
  .attr("r", "15.22")
  .on("click", planetClick);

var gradient = starGroup
  .append("linearGradient")
  .attr("id", "svgGradient")
  .attr("x1", "0%")
  .attr("x2", "100%")
  .attr("y1", "0%")
  .attr("y2", "100%");

gradient
  .append("stop")
  .attr("class", "start")
  .attr("offset", "0%")
  .attr("stop-color", "white")
  .attr("stop-opacity", 1);

gradient
  .append("stop")
  .attr("class", "end")
  .attr("offset", "100%")
  .attr("stop-color", "orange")
  .attr("stop-opacity", 1);

var gradientII = starGroup
  .append("linearGradient")
  .attr("id", "svgGradientII")
  .attr("x1", "0%")
  .attr("x2", "100%")
  .attr("y1", "0%")
  .attr("y2", "100%");

gradientII
  .append("stop")
  .attr("class", "start")
  .attr("offset", "0%")
  .attr("stop-color", "#40405c")
  .attr("stop-opacity", 1);

gradientII
  .append("stop")
  .attr("class", "end")
  .attr("offset", "100%")
  .attr("stop-color", "#8a76ab")
  .attr("stop-opacity", 1);

////// MOUNDS- CIRCLES ///////
var mercuryMoundCLK = handGroup
  .append("circle")
  .attr("class", "mMercury mound")
  .attr("cx", "85.23")
  .attr("cy", "341.46")
  .attr("fill", "magenta")
  .attr("transform", "translate(36.64 15.07)")
  .attr("r", "28.22")
  .on("click", mountofMercuryClick);

var apolloMoundCLK = handGroup
  .append("circle")
  .attr("class", "mApollo mound")
  .attr("id", "test")
  .attr("cx", "151.1")
  .attr("cy", "310.75")
  .attr("fill", "magenta")
  .attr("transform", "translate(36.64 15.07)")
  .attr("r", "28.22")
  .on("click", mountofApolloClick);

var saturnMoundCLK = handGroup
  .append("circle")
  .attr("class", "mSaturn mound")
  .attr("cx", "221.34")
  .attr("cy", "303.15")
  .attr("fill", "magenta")
  .attr("transform", "translate(36.64 15.07)")
  .attr("r", "28.22")
  .on("click", mountofSaturnClick);

var jupiterMoundCLK = handGroup
  .append("circle")
  .attr("class", "mJupiter mound")
  .attr("cx", "300.02")
  .attr("cy", "313.1")
  .attr("fill", "magenta")
  .attr("transform", "translate(36.64 15.07)")
  .attr("r", "28.22")
  .datum({
    title: "The Mount of Jupiter",
    info:
      "The Mount of Jupiter is located on the palm of the hand at the base of the index finger. It has a connection to the Greek God, Zeus, who became Jupiter in Roman mythology. This mount indicates how you perceive the world and how you want to be viewed by others. It has a lot to do with your determination, ego, need for power and control, accomplishment and leadership. If this mount is normally elevated and prominent, this can indicate an individual who has divine aspects, a strong spiritual connection, is not self-centered and has no problem helping others. This person always has a pleasant look, and no matter how difficult the situation, he carries a positive attitude. He shows signs of good health and respect and compassion for others. If it appears over developed and higher than the others, this may indicate someone who wants to dominate other people, is self-centered and has a lack of compassion. If there seems to be a flat or absence of this mount, this is an indication that one's self-confidence is low and there is a presence of a lack of ambition.",
    link: "https://psychiclibrary.com/mount-of-jupiter/"
  })
  .on("click", mountofJupiterClick);

var neptuneMoundCLK = handGroup
  .append("circle")
  .attr("class", "mNeptune mound")
  .attr("cx", "249.69")
  .attr("cy", "550.96")
  .attr("fill", "magenta")
  .attr("transform", "translate(36.64 15.07)")
  .attr("r", "33.42")
  .on("click", neptuneClick);

var lowerMarsCLK = handGroup
  .append("circle")
  .attr("class", "lowerMars mound")
  .attr("cx", "97.38")
  .attr("cy", "417.48")
  .attr("fill", "magenta")
  .attr("transform", "translate(36.64 10.07)")
  .attr("r", "33.42")
  .on("click", marsLowerClick);

var upperMarsCLK = handGroup
  .append("circle")
  .attr("class", "upperMars mound")
  .attr("cx", "317.11")
  .attr("cy", "388.46")
  .attr("fill", "magenta")
  .attr("transform", "translate(36.64 15.07)")
  .attr("r", "33.42")
  .on("click", upperMountMarsClick);

var fMercury1CLK = handGroup
  .append("circle")
  .attr("class", "fMercury fmound")
  .attr("cx", "21.61")
  .attr("cy", "167.57")
  .attr("r", "18.02")
  .attr("transform", "translate(35 15)")
  .attr("fill", "magenta")
  .on("mouseover", goldFadeM)
  .on("mouseout", goldUnFadeM)
  .on("click", fingerofMercuryClick);

////// MOUNDS- ELLIPSES ///////
var logicCLK = handGroup
  .append("ellipse")
  .attr("class", "logic mound")
  .attr("cx", "451.03")
  .attr("cy", "408.49")
  .attr("rx", "33.06")
  .attr("ry", "28.22")
  .attr("transform", "translate(-138.3 561.24) rotate(-57.2)")
  .attr("fill", "none")
  .on("click", logicClick);

var willCLK = handGroup
  .append("ellipse")
  .attr("class", "will mound")
  .attr("cx", "496.9")
  .attr("cy", "321.1")
  .attr("rx", "30.67")
  .attr("ry", "26.18")
  .attr("transform", "matrix(0.54, -0.84, 0.84, 0.54, -38.83, 559.74)")
  .attr("fill", "none")
  .on("click", willClick);

var marsPlainCLK = handGroup
  .append("ellipse")
  .attr("class", "marsPlain mound")
  .attr("cx", "257.98")
  .attr("cy", "423.56")
  .attr("rx", "54.92")
  .attr("ry", "71.39")
  .attr("transform", "translate(-230.58 311.41) rotate(-45)")
  //.attr("transform","translate(0 0)")
  .attr("fill", "none")
  //.on("mouseover",marsPlainHover)
  //.on("mouseout",marsPlainOut)
  .on("click", marsPlainClick);

var moonMoundCLK = handGroup
  .append("ellipse")
  .attr("class", "mMoon mound")
  .attr("cx", "175.6")
  .attr("cy", "513.8")
  .attr("rx", "55.96")
  .attr("ry", "50.29")
  .attr("transform", "translate(-255.32 166.17) rotate(-32.01)")
  .attr("fill", "none")
  .on("click", moonClick);

var plutoMoundCLK = handGroup
  .append("ellipse")
  .attr("class", "mPluto mound")
  .attr("cx", "183.7")
  .attr("cy", "567.91")
  .attr("rx", "25.09")
  .attr("ry", "22.65")
  .attr("transform", "translate(30 10)")
  .attr("fill", "none")
  .on("click", plutoClick);

var venusMoundCLK = handGroup
  .append("ellipse")
  .attr("class", "mVenus mound")
  .attr("cx", "365.22")
  .attr("cy", "502.85")
  .attr("rx", "51.38")
  .attr("ry", "58.63")
  .attr("transform", "translate(0,0)")
  .attr("fill", "none")
  .on("click", mountofVenusClick);

///// FINGER MOUNDS ///////////

var fJupiter3CLK = handGroup
  .append("ellipse")
  .attr("class", "fJupiter fmound")
  .attr("id", "j1")
  .attr("cx", "317.11")
  .attr("cy", "219.58")
  .attr("rx", "25.23")
  .attr("ry", "33.82")
  .attr("transform", "translate(35 15)")
  .attr("fill", "none")
  .on("mouseover", goldFadeJ)
  .on("mouseout", goldUnFadeJ)
  .on("click", fingerofJupiterClick);

var fJupiter2CLK = handGroup
  .append("ellipse")
  .attr("class", "fJupiter fmound")
  .attr("id", "j2")
  .attr("cx", "324.84")
  .attr("cy", "126.77")
  .attr("rx", "24.06")
  .attr("ry", "32.26")
  .attr("transform", "translate(35 15)")
  //.attr("transform","translate(-289.66 481.22) rotate(-53.55)")
  .attr("fill", "none")
  .on("mouseover", goldFadeJ)
  .on("mouseout", goldUnFadeJ)
  .on("click", fingerofJupiterClick);

var fJupiter1CLK = handGroup
  .append("ellipse")
  .attr("class", "fJupiter fmound")
  .attr("id", "j3")
  .attr("cx", "326.01")
  .attr("cy", "53.12")
  .attr("rx", "19.82")
  .attr("ry", "22.43")
  .attr("transform", "translate(35 15)")
  //.attr("transform","translate(-289.66 481.22) rotate(-53.55)")
  .attr("fill", "none")
  .on("mouseover", goldFadeJ)
  .on("mouseout", goldUnFadeJ)
  .on("click", fingerofJupiterClick);

var fSaturn1CLK = handGroup
  .append("ellipse")
  .attr("class", "fSaturn fmound")
  .attr("id", "s1")
  .attr("cx", "221.37")
  .attr("cy", "211.76")
  .attr("rx", "25.23")
  .attr("ry", "33.82")
  .attr("transform", "translate(35 15)")
  .attr("fill", "none")
  .on("mouseover", goldFadeS)
  .on("mouseout", goldUnFadeS)
  .on("click", fingerofSaturnClick);

var fSaturn2CLK = handGroup
  .append("ellipse")
  .attr("class", "fSaturn fmound")
  .attr("id", "s2")
  .attr("cx", "221.37")
  .attr("cy", "119.96")
  .attr("rx", "24.06")
  .attr("ry", "32.26")
  .attr("transform", "translate(35 15)")
  .attr("fill", "none")
  .on("mouseover", goldFadeS)
  .on("mouseout", goldUnFadeS)
  .on("click", fingerofSaturnClick);

var fSaturn3CLK = handGroup
  .append("ellipse")
  .attr("class", "fSaturn fmound")
  .attr("id", "s3")
  .attr("cx", "222.39")
  .attr("cy", "41.66")
  .attr("rx", "19.82")
  .attr("ry", "23.81")
  .attr("transform", "translate(35 15)")
  //.attr("transform","translate(-289.66 481.22) rotate(-53.55)")
  .attr("fill", "none")
  .on("mouseover", goldFadeS)
  .on("mouseout", goldUnFadeS)
  .on("click", fingerofSaturnClick);

var fApollo1CLK = handGroup
  .append("ellipse")
  .attr("class", "fApollo fmound")
  .attr("id", "a1")
  .attr("cx", "167.27")
  .attr("cy", "234.65")
  .attr("rx", "25.23")
  .attr("ry", "33.82")
  .attr("fill", "none")
  .on("mouseover", goldFadeA)
  .on("mouseout", goldUnFadeA)
  .on("click", fingerofApolloClick);

var fApollo2CLK = handGroup
  .append("ellipse")
  .attr("class", "fApollo fmound")
  .attr("id", "a2")
  .attr("cx", "124.86")
  .attr("cy", "128.91")
  .attr("rx", "22.86")
  .attr("ry", "30.65")
  .attr("transform", "translate(35 15)")
  .attr("fill", "none")
  .on("mouseover", goldFadeA)
  .on("mouseout", goldUnFadeA)
  .on("click", fingerofApolloClick);

var fApollo3CLK = handGroup
  .append("ellipse")
  .attr("class", "fApollo fmound")
  .attr("id", "a3")
  .attr("cx", "167.27")
  .attr("cy", "69.96")
  .attr("rx", "23.81")
  .attr("ry", "19.82")
  .attr("transform", "translate(64.23 214.52) rotate(-78.31)")
  .attr("fill", "none")
  .on("mouseover", goldFadeA)
  .on("mouseout", goldUnFadeA)
  .on("click", fingerofApolloClick);

var fMercury2CLK = handGroup
  .append("ellipse")
  .attr("class", "fMercury fmound")
  .attr("id", "")
  .attr("cx", "89.78")
  .attr("cy", "290.69")
  .attr("rx", "20.42")
  .attr("ry", "27.07")
  .attr("transform", "translate(-115 65) rotate(-24.74)")
  .attr("fill", "none")
  .on("mouseover", goldFadeM)
  .on("mouseout", goldUnFadeM)
  .on("click", fingerofMercuryClick);

var fMercury3CLK = handGroup
  .append("ellipse")
  .attr("class", "fMercury fmound")
  .attr("cx", "31.89")
  .attr("cy", "217.58")
  .attr("rx", "18.78")
  .attr("ry", "20.42")
  .attr("transform", "translate(35 15)")
  //.attr("transform","translate(-289.66 481.22) rotate(-53.55)")
  .attr("fill", "none")
  .on("mouseover", goldFadeM)
  .on("mouseout", goldUnFadeM)
  .on("click", fingerofMercuryClick);

/////// Text Label ///////

handGroup
  .selectAll("path.willText")
  .data(nuWillText)
  .enter()
  .append("path")
  .attr("class", "willText")
  .attr("fill", "#b8b8b8")
  .attr("stroke", "#b8b8b8")
  .attr("transform", "translate(-40,-54)")
  .attr("d", function (d) {
    return d;
  });

handGroup
  .selectAll("path.logicText")
  .data(nuLogicText)
  .enter()
  .append("path")
  .attr("class", "logicText")
  .attr("fill", "#b8b8b8")
  .attr("stroke", "#b8b8b8")
  .attr("transform", "translate(-41,-53)")
  .attr("d", function (d) {
    return d;
  });

//// PALM LINES /////

var lifeLineCLK = handGroup
  .append("path")
  .attr("class", "life line")
  .attr("fill", "none")
  .attr("stroke", "black")
  .attr("d", life);

var fateLineCLK = handGroup
  .append("path")
  .attr("class", "fate line")
  .attr("fill", "none")
  .attr("stroke", "black")
  .attr("d", fate);

var headLineCLK = handGroup
  .append("path")
  .attr("class", "head line")
  .attr("fill", "none")
  .attr("stroke", "black")
  .attr("d", head);

var heartLineCLK = handGroup
  .append("path")
  .attr("class", "heart line")
  .attr("fill", "none")
  .attr("stroke", "black")
  .attr("d", heart);

var successLineCLK = handGroup
  .append("path")
  .attr("class", "success line")
  .attr("fill", "none")
  .attr("stroke", "black")
  .attr("d", success);

var healthLineCLK = handGroup
  .append("path")
  .attr("class", "health line")
  .attr("fill", "none")
  .attr("stroke", "black")
  .attr("d", health);

var girdleOfVenusCLK = handGroup
  .append("path")
  .attr("class", "girdleOfVenus line")
  .attr("fill", "none")
  .attr("stroke", "black")
  .attr("d", girdleOfVenus);

var ringOfSolomonCLK = handGroup
  .append("path")
  .attr("class", "ringOfSolomon line")
  .attr("fill", "none")
  .attr("stroke", "black")
  .attr("d", ringOfSolomon);

////// OTHER LINES ///////
var marriageLineCLK1 = handGroup
  .append("path")
  .attr("class", "marriageLine cline")
  .attr("id", "mar1")
  .attr("fill", "none")
  .attr("d", marriageLine1)
  .on("mouseover", goldIn)
  .on("mouseout", goldOut);

var marriageLineCLK2 = handGroup
  .append("path")
  .attr("class", "marriageLine cline")
  .attr("id", "mar2")
  .attr("fill", "none")
  .attr("d", marriageLine2)
  .on("mouseover", goldIn)
  .on("mouseout", goldOut);

var travelLineCLK1 = handGroup
  .append("path")
  .attr("class", "travelLine tline")
  .attr("fill", "none")
  .attr("d", travelLine1)
  .on("mouseover", goldInC)
  .on("mouseout", goldOutC);

var travelLineCLK2 = handGroup
  .append("path")
  .attr("class", "travelLine tline")
  .attr("fill", "none")
  .attr("d", travelLine2)
  .on("mouseover", goldInC)
  .on("mouseout", goldOutC);

var travelLineCLK3 = handGroup
  .append("path")
  .attr("class", "travelLine tline")
  .attr("fill", "none")
  .attr("d", travelLine3)
  .on("mouseover", goldInC)
  .on("mouseout", goldOutC);

var braceletLineCLK1 = handGroup
  .append("path")
  .attr("class", "bracelette bline")
  .attr("fill", "none")
  .attr("d", bracelette1)
  .on("mouseover", goldInB)
  .on("mouseout", goldOutB);

var braceletLineCLK2 = handGroup
  .append("path")
  .attr("class", "bracelette bline")
  .attr("fill", "none")
  .attr("d", bracelette2)
  .on("mouseover", goldInB)
  .on("mouseout", goldOutB);

var braceletLineCLK3 = handGroup
  .append("path")
  .attr("class", "bracelette bline")
  .attr("fill", "none")
  .attr("d", bracelette3)
  .on("mouseover", goldInB)
  .on("mouseover", goldOutB);

//// SYMBOLS ////

handGroup
  .append("path")
  .attr("class", "fJupiterSymbol symbol finger symbol")
  .attr("fill", "blue")
  .attr("stroke", "blue")
  .attr("d", jupiterFinger);

handGroup
  .append("path")
  .attr("class", "jupiterSymbol sMound symbol")
  .attr("fill", "blue")
  .attr("stroke", "blue")
  .attr("d", jupiterMound);

handGroup
  .append("path")
  .attr("class", "fSaturnSymbol finger symbol")
  .attr("fill", "blue")
  .attr("stroke", "blue")
  .attr("d", saturnFinger);

handGroup
  .append("path")
  .attr("class", "saturnSymbol sMound symbol")
  .attr("fill", "blue")
  .attr("stroke", "blue")
  .attr("d", saturnMound);

handGroup
  .append("path")
  .attr("class", "apolloSymbol sMound symbol")
  .attr("fill", "blue")
  .attr("stroke", "blue")
  .attr("d", apolloMound1);

handGroup
  .append("path")
  .attr("class", "apolloSymbol sMound symbol")
  .attr("fill", "blue")
  .attr("stroke", "blue")
  .attr("d", apolloMound2);

handGroup
  .append("path")
  .attr("class", "fApolloSymbol finger symbol")
  .attr("fill", "blue")
  .attr("stroke", "blue")
  .attr("transform", "translate(0,-6)")
  .attr("d", apolloFinger1);

handGroup
  .append("path")
  .attr("class", "fApolloSymbol finger symbol")
  .attr("fill", "blue")
  .attr("stroke", "blue")
  .attr("transform", "translate(0,-6)")
  .attr("d", apolloFinger2);

handGroup
  .append("path")
  .attr("class", "fMercurySymbol finger symbol")
  .attr("fill", "blue")
  .attr("stroke", "blue")
  .attr("d", mercuryFinger);

handGroup
  .append("path")
  .attr("class", "mercurySymbol sMound symbol")
  .attr("fill", "blue")
  .attr("stroke", "blue")
  .attr("d", mercuryMound);

handGroup
  .append("path")
  .attr("class", "neptuneSymbol sMound symbol")
  .attr("fill", "blue")
  .attr("stroke", "blue")
  .attr("d", neptuneMound);

handGroup
  .append("path")
  .attr("class", "plutoSymbol sMound symbol")
  .attr("fill", "blue")
  .attr("stroke", "blue")
  .attr("transform", "translate(-5,-5)")
  .attr("d", plutoMound);

handGroup
  .append("path")
  .attr("class", "marsLowerSymbol sMound symbol")
  .attr("fill", "#b8b8b8")
  .attr("stroke", "#b8b8b8")
  .attr("d", marsLower);

handGroup
  .append("rect")
  .attr("class", "lowerMarsSymbol sMound symbol")
  .attr("height", 1.93)
  .attr("width", 16.74)
  .attr("x", 122.32)
  .attr("y", 449.03)
  .style("fill", "#b8b8b8");

handGroup
  .append("path")
  .attr("class", "symbol sMound marsUpperSymbol symbol")
  .attr("fill", "blue")
  .attr("stroke", "blue")
  .attr("d", marsUpper);

handGroup
  .append("rect")
  .attr("class", "marsUpperSymbol sMound symbol")
  .attr("height", 1.93)
  .attr("width", 16.74)
  .attr("x", 340.54)
  .attr("y", 390.84)
  .style("fill", "#b8b8b8");

handGroup
  .append("path")
  .attr("class", "sMound marsPlainSymbol symbol")
  .attr("fill", "#b8b8b8")
  .attr("stroke", "#b8b8b8")
  .attr("d", marsPlain);

handGroup
  .append("path")
  .attr("class", "venusSymbol sMound symbol")
  .attr("fill", "blue")
  .attr("stroke", "blue")
  .attr("d", venusMound);

handGroup
  .append("path")
  .attr("class", "moonSymbol symbol sMound")
  .attr("fill", "blue")
  .attr("stroke", "blue")
  .attr("d", moonMound);

////////// HTML Functions - Lines ///////////

lifeLineCLK.on("click", function (d) {
  d3.select("#temptext").remove();
  d3.select(".lineEXAMPLE,.palmEX").remove();
  d3.select(".moundText").remove();

  svg
    .select(".life")
    .style("stroke", "#6AA047")
    .style("opacity", "0.5")
    .style("animation-name", "activeStroke")
    .style("animation-duration", "10s");

  box
    .append("foreignObject")
    .attr("transform", "translate(35,15)")
    .attr("width", 550)
    .attr("height", 600)
    .append("xhtml:body")
    .attr("class", "nutext")
    .style("font", "10.5px 'Helvetica'")
    .html(lifeLine);
});

heartLineCLK.on("click", function (d) {
  d3.select("#temptext").remove();
  d3.select(".lineEXAMPLE,.palmEX").remove();
  d3.select(".moundText").remove();

  svg
    .select(".heart")
    .style("stroke", "#E57FAD")
    .style("opacity", "0.6")
    .style("animation-name", "activeStroke")
    .style("animation-duration", "10s");

  box
    .append("foreignObject")
    .attr("transform", "translate(35,15)")
    .attr("width", 550)
    .attr("height", 640)
    .append("xhtml:body")
    .attr("class", "nutext")
    .style("font", "8.5px 'Helvetica'")
    .html(heartLine);
});

headLineCLK.on("click", function (d) {
  d3.select("#temptext").remove();
  d3.select(".lineEXAMPLE,.palmEX").remove();
  d3.select(".moundText").remove();

  svg
    .select(".head")
    .style("stroke", "#4E93C6")
    .style("opacity", "0.6")
    .style("animation-name", "activeStroke")
    .style("animation-duration", "10s");

  box
    .append("foreignObject")
    .attr("transform", "translate(35,15)")
    .attr("width", 550)
    .attr("height", 640)
    .append("xhtml:body")
    .attr("class", "nutext")
    .style("font", "8.7px 'Helvetica'")
    .html(headLine);
});

fateLineCLK.on("click", function (d) {
  d3.select("#temptext").remove();
  d3.select(".lineEXAMPLE,.palmEX").remove();
  d3.select(".moundText").remove();

  svg
    .select(".fate")
    .style("stroke", "#F2CB6B")
    .style("opacity", "0.6")
    .style("animation-name", "activeStroke")
    .style("animation-duration", "10s");

  box
    .append("foreignObject")
    .attr("transform", "translate(35,15)")
    .attr("width", 550)
    .attr("height", 640)
    .append("xhtml:body")
    .attr("class", "nutext")
    .style("font", "14px 'Helvetica'")
    .html(fateLine);
});

successLineCLK.on("click", function (d) {
  d3.select("#temptext").remove();
  d3.select(".lineEXAMPLE,.palmEX").remove();
  d3.select(".moundText").remove();

  svg
    .select(".success")
    .style("stroke", "#F9F9AC")
    .style("opacity", "0.6")
    .style("animation-name", "activeStroke")
    .style("animation-duration", "10s");

  box
    .append("foreignObject")
    .attr("transform", "translate(35,15)")
    .attr("width", 550)
    .attr("height", 640)
    .append("xhtml:body")
    .attr("class", "nutext")
    .style("font", "14px 'Helvetica'")
    .html(apolloLine);
});

healthLineCLK.on("click", function (d) {
  d3.select("#temptext").remove();
  d3.select(".lineEXAMPLE,.palmEX").remove();
  d3.select(".moundText").remove();

  svg
    .select(".health")
    .style("stroke", "#B182F4")
    .style("opacity", "0.6")
    .style("animation-name", "activeStroke")
    .style("animation-duration", "10s");

  box
    .append("foreignObject")
    .attr("transform", "translate(35,15)")
    .attr("width", 550)
    .attr("height", 640)
    .append("xhtml:body")
    .attr("class", "nutext")
    .style("font", "14px 'Helvetica'")
    .html(healthLine);
});

braceletLineCLK1.on("click", function (d) {
  d3.select("#temptext").remove();
  d3.select(".lineEXAMPLE,.palmEX").remove();
  d3.select(".moundText").remove();

  svg
    .selectAll(".bracelette")
    .transition()
    .duration(800)
    .style("stroke", "#007A6E")
    .style("opacity", "0.6")
    .style("animation-name", "activeStrokeGroup")
    .style("animation-duration", "10s");

  box
    .append("foreignObject")
    .attr("transform", "translate(35,15)")
    .attr("width", 550)
    .attr("height", 640)
    .append("xhtml:body")
    .attr("class", "nutext")
    .style("font", "12px 'Helvetica'")
    .html(braceletLines)
    .transition()
    .duration(800);
});

braceletLineCLK2.on("click", function (d) {
  d3.select("#temptext").remove();
  d3.select(".lineEXAMPLE,.palmEX").remove();
  d3.select(".moundText").remove();

  svg
    .selectAll(".bracelette")
    .transition()
    .duration(800)
    .style("stroke", "#007A6E")
    .style("opacity", "0.6")
    .style("animation-name", "activeStrokeGroup")
    .style("animation-duration", "10s");

  box
    .append("foreignObject")
    .attr("transform", "translate(35,15)")
    .attr("width", 550)
    .attr("height", 640)
    .append("xhtml:body")
    .attr("class", "nutext")
    .style("font", "12px 'Helvetica'")
    .html(braceletLines)
    .transition()
    .duration(800);
});

braceletLineCLK3.on("click", function (d) {
  d3.select("#temptext").remove();
  d3.select(".lineEXAMPLE,.palmEX").remove();
  d3.select(".moundText").remove();

  svg
    .selectAll(".bracelette")
    .transition()
    .duration(800)
    .style("stroke", "#007A6E")
    .style("opacity", "0.6")
    .style("animation-name", "activeStrokeGroup")
    .style("animation-duration", "10s");

  box
    .append("foreignObject")
    .attr("transform", "translate(35,15)")
    .attr("width", 550)
    .attr("height", 640)
    .append("xhtml:body")
    .attr("class", "nutext")
    .style("font", "12px 'Helvetica'")
    .html(braceletLines)
    .transition()
    .duration(800);
});

travelLineCLK1.on("click", function (d) {
  d3.select("#temptext").remove();
  d3.select(".lineEXAMPLE,.palmEX").remove();
  d3.select(".moundText").remove();

  svg
    .selectAll(".travelLine")
    .transition()
    .duration(800)
    .style("stroke", "#EA8C63")
    .style("opacity", "0.6")
    .style("animation-name", "activeStrokeGroup")
    .style("animation-duration", "10s");

  box
    .append("foreignObject")
    .attr("transform", "translate(35,15)")
    .attr("width", 550)
    .attr("height", 640)
    .append("xhtml:body")
    .attr("class", "nutext")
    .style("font", "10px 'Montserrat'")
    .html(travelLines);
});

travelLineCLK2.on("click", function (d) {
  d3.select("#temptext").remove();
  d3.select(".lineEXAMPLE,.palmEX").remove();
  d3.select(".moundText").remove();

  svg
    .selectAll(".travelLine")
    .transition()
    .duration(800)
    .style("stroke", "#EA8C63")
    .style("opacity", "0.6")
    .style("animation-name", "activeStrokeGroup")
    .style("animation-duration", "10s");

  box
    .append("foreignObject")
    .attr("transform", "translate(35,15)")
    .attr("width", 550)
    .attr("height", 640)
    .append("xhtml:body")
    .attr("class", "nutext")
    .style("font", "10px 'Montserrat'")
    .html(travelLines);
});

travelLineCLK3.on("click", function (d) {
  d3.select("#temptext").remove();
  d3.select(".lineEXAMPLE,.palmEX").remove();
  d3.select(".moundText").remove();

  svg
    .selectAll(".travelLine")
    .transition()
    .duration(800)
    .style("stroke", "#EA8C63")
    .style("opacity", "0.6")
    .style("animation-name", "activeStrokeGroup")
    .style("animation-duration", "10s");

  box
    .append("foreignObject")
    .attr("transform", "translate(35,15)")
    .attr("width", 550)
    .attr("height", 640)
    .append("xhtml:body")
    .attr("class", "nutext")
    .style("font", "10px 'Montserrat'")
    .html(travelLines);
});

ringOfSolomonCLK.on("click", function (d) {
  d3.select("#temptext").remove();
  d3.select(".lineEXAMPLE,.palmEX").remove();
  d3.select(".moundText").remove();

  d3.select(".ringOfSolomon")
    .style("stroke", "#99005B")
    .style("opacity", "0.6")
    .style("animation-name", "activeStroke")
    .style("animation-duration", "10s");

  box
    .append("foreignObject")
    .attr("transform", "translate(35,15)")
    .attr("width", 550)
    .attr("height", 640)
    .append("xhtml:body")
    .attr("class", "nutext")
    .style("font", "14px 'Helvetica'")
    .html(ringofSoloman);
});

marriageLineCLK1.on("click", function (d) {
  d3.select("#temptext").remove();
  d3.select(".lineEXAMPLE,.palmEX").remove();
  d3.select(".moundText").remove();

  d3.selectAll(".cline")
    .style("stroke", "#ACE1E2")
    .style("opacity", "0.6")
    .style("animation-name", "activeStrokeGroup")
    .style("animation-duration", "10s");

  box
    .append("foreignObject")
    .attr("transform", "translate(35,15)")
    .attr("width", 550)
    .attr("height", 640)
    .append("xhtml:body")
    .attr("class", "nutext")
    .style("font", "14px 'Helvetica'")
    .html(childrenLines);
});

marriageLineCLK2.on("click", function (d) {
  d3.select("#temptext").remove();
  d3.select(".lineEXAMPLE,.palmEX").remove();
  d3.select(".moundText").remove();

  d3.selectAll(".cline")
    .style("stroke", "#ACE1E2")
    .style("opacity", "0.6")
    .style("animation-name", "activeStrokeGroup")
    .style("animation-duration", "10s");

  box
    .append("foreignObject")
    .attr("transform", "translate(35,15)")
    .attr("width", 550)
    .attr("height", 640)
    .append("xhtml:body")
    .attr("class", "nutext")
    .style("font", "14px 'Helvetica'")
    .html(childrenLines);
});

girdleOfVenusCLK.on("click", function (d) {
  d3.select("#temptext").remove();
  d3.select(".lineEXAMPLE,.palmEX").remove();
  d3.select(".moundText").remove();

  d3.select(".girdleOfVenus")
    .style("stroke", "#F9F9AC")
    .style("opacity", "0.6")
    .style("animation-name", "activeStroke")
    .style("animation-duration", "10s");

  box
    .append("foreignObject")
    .attr("transform", "translate(35,15)")
    .attr("width", 550)
    .attr("height", 640)
    .append("xhtml:body")
    .attr("class", "nutext")
    .style("font", "14px 'Helvetica'")
    .html(girdleofVenus);
});

///////////// Mound Functions ///////////

function neptuneClick() {
  d3.select("#temptext").remove();
  d3.select(".lineEXAMPLE,.palmEX").remove();
  d3.select(".moundText").remove();

  d3.select(".neptuneSymbol")
    .transition()
    .duration(800)
    .style("fill", "#C7CEEA")
    .style("stroke", "black")
    .style("opacity", "0.8")
    .style("stroke-width", "1px");

  box
    .append("foreignObject")
    .attr("transform", "translate(35,15)")
    .attr("width", 550)
    .attr("height", 600)
    .append("xhtml:body")
    .attr("class", "nutext")
    .style("font", "14px Helvetica")
    .html(neptuneTXT);
}
function marsPlainClick() {
  d3.select("#temptext").remove();
  d3.select(".lineEXAMPLE,.palmEX").remove();
  d3.select(".moundText").remove();

  d3.selectAll(".marsPlainSymbol")
    .transition()
    .duration(800)
    .style("fill", "#F88F77")
    .style("stroke", "black")
    .style("opacity", "0.8")
    .style("stroke-width", "1px");

  box
    .append("foreignObject")
    .attr("transform", "translate(35,15)")
    .attr("width", 550)
    .attr("height", 600)
    .append("xhtml:body")
    .attr("class", "nutext")
    .style("font", "14px 'Helvetica'")
    .html(planeOfMarsTXT);
}

function upperMountMarsClick() {
  d3.select("#temptext").remove();
  d3.select(".lineEXAMPLE,.palmEX").remove();
  d3.select(".moundText").remove();

  d3.selectAll(".marsUpperSymbol")
    .transition()
    .duration(800)
    .style("fill", "#FBBFB1")
    .style("stroke", "black")
    .style("opacity", "0.8")
    .style("stroke-width", "1px");

  box
    .append("foreignObject")
    .attr("transform", "translate(35,15)")
    .attr("width", 550)
    .attr("height", 600)
    .append("xhtml:body")
    .attr("class", "nutext")
    .style("font", "14px Helvetica")
    .html(upperMountMarsTXT);
}

function marsLowerClick() {
  d3.select("#temptext").remove();
  d3.select(".lineEXAMPLE,.palmEX").remove();
  d3.select(".moundText").remove();

  d3.select(".marsLowerSymbol")
    .transition()
    .duration(800)
    .style("fill", "#C17368")
    .style("stroke", "black")
    .style("opacity", "0.8")
    .style("stroke-width", "1px");

  d3.select(".lowerMarsSymbol")
    .transition()
    .duration(800)
    .style("fill", "#C17368")
    .style("stroke", "black")
    .style("opacity", "0.8")
    .style("stroke-width", "1px");

  box
    .append("foreignObject")
    .attr("transform", "translate(35,15)")
    .attr("width", 550)
    .attr("height", 600)
    .append("xhtml:body")
    .attr("class", "nutext")
    .style("font", "14px 'Helvetica'")
    .html(lowerMountMarsTXT);
}

/// HTML - Finger Mounds ///

function fingerofSaturnClick() {
  d3.select("#temptext").remove();
  d3.select(".lineEXAMPLE,.palmEX").remove();
  d3.select(".moundText").remove();

  d3.select(".fSaturnSymbol")
    .transition()
    .duration(800)
    .style("fill", "#AACE93")
    .style("stroke", "black")
    .style("opacity", "0.8")
    .style("stroke-width", "1px");

  box
    .append("foreignObject")
    .attr("transform", "translate(35,15)")
    .attr("width", 550)
    .attr("height", 600)
    .append("xhtml:body")
    .attr("class", "nutext")
    .style("font", "14px Helvetica")
    .html(fingerofSaturnTXT);
}

function fingerofApolloClick() {
  d3.select("#temptext").remove();
  d3.select(".lineEXAMPLE,.palmEX").remove();
  d3.select(".moundText").remove();

  d3.selectAll(".fApolloSymbol")
    .transition()
    .duration(800)
    .style("fill", "#F7CE76")
    .style("stroke", "black")
    .style("opacity", "0.8")
    .style("stroke-width", "0.3px");

  box
    .append("foreignObject")
    .attr("transform", "translate(35,15)")
    .attr("width", 550)
    .attr("height", 600)
    .append("xhtml:body")
    .attr("class", "nutext")
    .style("font", "14px Helvetica")
    .html(fingerofApolloTXT);
}

function fingerofJupiterClick() {
  d3.select("#temptext").remove();
  d3.select(".lineEXAMPLE,.palmEX").remove();
  d3.select(".moundText").remove();

  d3.select(".fJupiterSymbol")
    .transition()
    .duration(800)
    .style("fill", "#8ACCDD")
    .style("stroke", "black")
    .style("opacity", "0.8")
    .style("stroke-width", "1px");

  box
    .append("foreignObject")
    .attr("transform", "translate(35,15)")
    .attr("width", 550)
    .attr("height", 600)
    .append("xhtml:body")
    .attr("class", "nutext")
    .style("font", "14px Helvetica")
    .html(fingerofJupiterTXT);
}
function fingerofMercuryClick() {
  d3.select("#temptext").remove();
  d3.select(".lineEXAMPLE,.palmEX").remove();
  d3.select(".moundText").remove();

  d3.select(".fMercurySymbol")
    .transition()
    .duration(800)
    .style("fill", "#D1AAC7")
    .style("stroke", "black")
    .style("opacity", "0.8")
    .style("stroke-width", "1px");

  box
    .append("foreignObject")
    .attr("transform", "translate(35,15)")
    .attr("width", 550)
    .attr("height", 600)
    .append("xhtml:body")
    .attr("class", "nutext")
    .style("font", "14px Helvetica")
    .html(fingerofMercuryTXT);
}
////////// Planet Functions - Mounds ///////////

function planetClick() {
  d3.select(".palm")
    .transition()
    .duration(800)
    .style("fill", "#ffffff")
    .style("stroke", "#ffffff")
    .style("stroke-width", "1px");

  d3.select("body")
    .transition()
    .duration(800)
    .style(
      "background",
      "linear-gradient(to bottom,#102530 0%, #163C52 60%, #dcb185 100%"
    );

  box
    .select(".baseRect")
    .transition()
    .duration(800)
    .style("fill", "#000000")
    .style("stroke", "white");

  box
    .selectAll(".layerRect")
    .transition()
    .duration(800)
    .style("stroke", "white");

  d3.select(".planet").remove();

  var style = document.createElement("style");
  style.innerHTML = "* { color:white;}";
  document.body.appendChild(style);

  var styleII = document.createElement("style");
  styleII.innerHTML = "a { color:white; }";
  document.body.appendChild(styleII);

  var styleIIII = document.createElement("style");
  styleII.innerHTML = "h1 { color:white; }";
  document.body.appendChild(styleIIII);

  var styleIII = document.createElement("style");
  styleII.innerHTML = "a:visited { color:white; }";
  document.body.appendChild(styleIII);
}

function planetClickII() {
  d3.select(".palm")
    .transition()
    .duration(800)
    .style("fill", "#000000")
    .style("stroke", "#000000")
    .style("stroke-width", "1px");

  d3.select("body")
    .transition()
    .duration(800)
    .style(
      "background",
      "linear-gradient(to bottom,#2b2b42 0%, #40405c 20%, #6f71aa 70%,#8a76ab 90%, #b491bd 100%)"
    );

  box
    .select(".baseRect")
    .transition()
    .duration(800)
    .style("fill", "white")
    .style("stroke", "black");

  box
    .selectAll(".layerRect")
    .transition()
    .duration(800)
    .style("stroke", "black");

  var planetSwitch = starGroup
    .append("circle")
    .attr("class", "planet")
    .attr("cx", "1220")
    .attr("cy", "441.46")
    .attr("fill", "url(#svgGradient)")
    .attr("transform", "translate(136.64 15.07)")
    .attr("r", "15.22")
    .on("click", planetClick); /// ONLY HERE TO PREVENT TITLE BUG AFTER 3RD SELECTION

  var altstyle = document.createElement("style");
  altstyle.innerHTML = "* { color:black; }";
  document.body.appendChild(altstyle);

  var altstyleII = document.createElement("style");
  altstyleII.innerHTML = "a{ color:black; }";
  document.body.appendChild(altstyleII);

  var altstyleIiI = document.createElement("style");
  altstyleII.innerHTML = "a:visited{ color:black; }";
  document.body.appendChild(altstyleII);
}

////////// HMTL Functions - Mounds ///////////

function plutoClick() {
  d3.select("#temptext").remove();
  d3.select(".lineEXAMPLE,.palmEX").remove();
  d3.select(".moundText").remove();

  d3.select(".plutoSymbol")
    .transition()
    .duration(800)
    .style("fill", "#b4a6ed")
    .style("stroke", "black")
    .style("opacity", "0.8")
    .style("stroke-width", "0.5px");

  box
    .append("foreignObject")
    .attr("transform", "translate(35,15)")
    .attr("width", 550)
    .attr("height", 600)
    .append("xhtml:body")
    .attr("class", "nutext")
    .style("font", "14px Helvetica")
    .html(plutoTXT);
}

function willClick() {
  d3.select("#temptext").remove();
  d3.select(".lineEXAMPLE,.palmEX").remove();
  d3.select(".moundText").remove();
  d3.select(".lineEXAMPLE,.palmEX").remove();
  d3.select(".moundText").remove();

  d3.selectAll(".willText")
    .transition()
    .duration(800)
    .style("fill", "#FF5533")
    .style("stroke", "black")
    .style("opacity", "0.7")
    .style("stroke-width", "0.5px");

  box
    .append("foreignObject")
    .attr("transform", "translate(35,15)")
    .attr("width", 550)
    .attr("height", 600)
    .append("xhtml:body")
    .attr("class", "nutext")
    .style("font", "14px Helvetica")
    .html(willTXT);
}

function logicClick() {
  d3.select("#temptext").remove();
  d3.select(".lineEXAMPLE,.palmEX").remove();
  d3.select(".moundText").remove();

  d3.selectAll(".logicText")
    .transition()
    .duration(800)
    .style("fill", "#00AAFF")
    .style("stroke", "black")
    .style("opacity", "0.7")
    .style("stroke-width", "0.5px");

  box
    .append("foreignObject")
    .attr("transform", "translate(35,15)")
    .attr("width", 550)
    .attr("height", 600)
    .append("xhtml:body")
    .attr("class", "nutext")
    .style("font", "14px Helvetica")
    .html(logicTXT);
}

function mountofJupiterClick() {
  d3.select("#temptext").remove();
  d3.select(".lineEXAMPLE,.palmEX").remove();
  d3.select(".moundText").remove();

  d3.select(".jupiterSymbol")
    .transition()
    .duration(800)
    .style("fill", "#8ACCDD")
    .style("stroke", "black")
    .style("opacity", "0.8")
    .style("stroke-width", "1px");

  box
    .append("foreignObject")
    .attr("transform", "translate(35,15)")
    .attr("width", 550)
    .attr("height", 600)
    .append("xhtml:body")
    .attr("class", "nutext")
    .style("font", "14px Helvetica")
    .html(mountofJupiterTXT);
}

function mountofSaturnClick() {
  d3.select("#temptext").remove();
  d3.select(".lineEXAMPLE,.palmEX").remove();
  d3.select(".moundText").remove();

  d3.select(".saturnSymbol")
    .transition()
    .duration(800)
    .style("fill", "#AACE93")
    .style("stroke", "black")
    .style("opacity", "0.8")
    .style("stroke-width", "1px");

  box
    .append("foreignObject")
    .attr("transform", "translate(35,15)")
    .attr("width", 550)
    .attr("height", 600)
    .append("xhtml:body")
    .attr("class", "nutext")
    .style("font", "14px Helvetica")
    .html(mountofSaturnTXT);
}

function mountofApolloClick() {
  d3.select("#temptext").remove();
  d3.select(".lineEXAMPLE,.palmEX").remove();
  d3.select(".moundText").remove();

  d3.selectAll(".apolloSymbol")
    .transition()
    .duration(800)
    .style("fill", "#F7CE76")
    .style("stroke", "black")
    .style("opacity", "0.8")
    .style("stroke-width", "1px");

  box
    .append("foreignObject")
    .attr("transform", "translate(35,15)")
    .attr("width", 550)
    .attr("height", 600)
    .append("xhtml:body")
    .attr("class", "nutext")
    .style("font", "14px Helvetica")
    .html(mountofApolloTXT);
}

function mountofMercuryClick() {
  d3.select("#temptext").remove();
  d3.select(".lineEXAMPLE,.palmEX").remove();
  d3.select(".moundText").remove();

  d3.select(".mercurySymbol")
    .transition()
    .duration(800)
    .style("fill", "#D1AAC7")
    .style("stroke", "black")
    .style("opacity", "0.8")
    .style("stroke-width", "1px");

  box
    .append("foreignObject")
    .attr("transform", "translate(35,15)")
    .attr("width", 550)
    .attr("height", 600)
    .append("xhtml:body")
    .attr("class", "nutext")
    .style("font", "14px Helvetica")
    .html(mountofMercuryTXT);
}

function mountofVenusClick() {
  d3.select("#temptext").remove();
  d3.select(".lineEXAMPLE,.palmEX").remove();
  d3.select(".moundText").remove();

  d3.select(".venusSymbol")
    .transition()
    .duration(800)
    .style("fill", "#E78895")
    .style("stroke", "black")
    .style("opacity", "0.8")
    .style("stroke-width", "1px");

  box
    .append("foreignObject")
    .attr("transform", "translate(35,15)")
    .attr("width", 550)
    .attr("height", 600)
    .append("xhtml:body")
    .attr("class", "nutext")
    .style("font", "14px Helvetica")
    .html(mountofVenusTXT);
}
function moonClick() {
  d3.select("#temptext").remove();
  d3.select(".lineEXAMPLE,.palmEX").remove();
  d3.select(".moundText").remove();

  d3.select(".moonSymbol")
    .transition()
    .duration(800)
    .style("fill", "#B5EAD7")
    .style("stroke", "black")
    .style("opacity", "0.8")
    .style("stroke-width", "1px");

  box
    .append("foreignObject")
    .attr("transform", "translate(35,15)")
    .attr("width", 550)
    .attr("height", 600)
    .append("xhtml:body")
    .attr("class", "nutext")
    .style("font", "14px Helvetica")
    .html(mountofMoonTXT);
}

function moundExClick() {
  d3.selectAll(".moundText")
    .transition()
    .duration(800)
    .style("fill", "#d4af37")
    .style("stroke", "black")
    .style("stroke-width", "0.25")
    .style("opacity", "0.7");
}

//////// Line Functions /////////////

function lineExClick() {
  d3.selectAll(".lineEXAMPLE")
    .transition()
    .duration(800)
    .style("stroke-width", "12px")
    .style("stroke", "#d4af37")
    .style("opacity", "0.7");
}
function goldIn() {
  d3.selectAll(".marriageLine")
    .transition()
    .duration(800)
    .style("stroke-width", "7px")
    .style("stroke", "#ACE1E2")
    .style("opacity", "0.5");
}

function goldOut() {
  d3.selectAll(".marriageLine")
    .transition()
    .duration(800)
    .style("stroke-width", "3px")
    .style("opacity", "0.5");
}

function goldInB() {
  d3.selectAll(".bracelette")
    .transition()
    .duration(800)
    .style("stroke", "#007A6E")
    .style("stroke-width", "7px")
    .style("opacity", "0.5");
}

function goldOutB() {
  d3.selectAll(".bracelette")
    .transition()
    .duration(800)
    .style("stroke-width", "3px")
    .style("opacity", "0.5");
}

function goldInC() {
  d3.selectAll(".travelLine")
    .transition()
    .duration(800)
    .style("stroke", "#EA8C63")
    .style("stroke-width", "7px")
    .style("opacity", "0.5");
}

function goldOutC() {
  d3.selectAll(".travelLine")
    .transition()
    .duration(800)
    .style("stroke-width", "3px")
    .style("opacity", "0.5");
}

function goldFadeJ() {
  d3.selectAll(".fJupiter")
    .transition()
    .duration(800)
    .style("opacity", "0.5")
    .style("fill", "#8ACCDD");
}

function goldUnFadeJ() {
  d3.selectAll(".fJupiter")
    .transition()
    .duration(800)
    .style("opacity", "0.5")
    .style("fill", "transparent");
}

function goldFadeM() {
  d3.selectAll(".fMercury")
    .transition()
    .duration(800)
    .style("opacity", "0.5")
    .style("fill", "#D1AAC7");
}

function goldUnFadeM() {
  d3.selectAll(".fMercury")
    .transition()
    .duration(800)
    .style("opacity", "0.5")
    .style("fill", "transparent");
}

function goldFadeA() {
  d3.selectAll(".fApollo")
    .transition()
    .duration(800)
    .style("opacity", "0.5")
    .style("fill", "#F7CE76");
}

function goldUnFadeA() {
  d3.selectAll(".fApollo")
    .transition()
    .duration(800)
    .style("opacity", "0.5")
    .style("fill", "transparent");
}

function goldFadeS() {
  d3.selectAll(".fSaturn")
    .transition()
    .duration(800)
    .style("opacity", "0.5")
    .style("fill", "#AACE93");
}

function goldUnFadeS() {
  d3.selectAll(".fSaturn")
    .transition()
    .duration(800)
    .style("opacity", "0.5")
    .style("fill", "transparent");
}

/// Browser CHECK ////

var isFirefox = navigator.userAgent.toLowerCase().indexOf("firefox") > -1;

if (isFirefox === true) {
  d3.selectAll(".hand").classed("mozHand", true);

  d3.selectAll(".hand").classed("hand", false);
}

function isSafari() {
  var ua = window.navigator.userAgent;
  var iOS = !!ua.match(/iP(ad|od|hone)/i);
  var hasSafariInUa = !!ua.match(/Safari/i);
  var noOtherBrowsersInUa = !ua.match(
    /Chrome|CriOS|OPiOS|mercury|FxiOS|Firefox/i
  );
  var result = false;
  if (iOS) {
    //detecting Safari in IOS mobile browsers
    var webkit = !!ua.match(/WebKit/i);
    result = webkit && hasSafariInUa && noOtherBrowsersInUa;
  } else if (window.safari !== undefined) {
    //detecting Safari in Desktop Browsers
    result = true;
  } else {
    // detecting Safari in other platforms
    result = hasSafariInUa && noOtherBrowsersInUa;
  }
  return result;
}

if (isSafari === true) {
  console.log("Safari Detected");

  d3.selectAll("polygon").classed("safariStars", true);
} else {
  console.log("Safari NOT Detected");
}
