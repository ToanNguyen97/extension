/* eslint-disable */
function GetCurrentDocument() {
  return window.document;
}

function ConvertDecToHex(nb) {
  var nbHexa = ''

  nbHexa += WonderTest.valueHexa[Math.floor(nb / 16)]
  nb = nb % 16
  nbHexa += WonderTest.valueHexa[nb]

  return nbHexa;
}

function ConvertRGBToHex(str) {
  var start = str.search(/\(/) + 1;
  var end = str.search(/\)/);

  str = str.slice(start, end);

  var hexValues = str.split(', ');
  var hexStr = '#';

  for (var i = 0; i < hexValues.length; i++) {
    hexStr += ConvertDecToHex(hexValues[i]);
  }

  if (hexStr == "#00000000") {
    hexStr = "#FFFFFF";
  }
  //hexStr = '<span style="border: 1px solid #000000 !important;width: 8px !important;height: 8px !important;display: inline-block !important;background-color:'+ hexStr +' !important;"></span> ' + hexStr;

  return hexStr;
}
function ConvertRGBAToHex(rgba) {
  let sep = rgba.indexOf(",") > -1 ? "," : " ";
  rgba = rgba.substr(5).split(")")[0].split(sep);
                
  // Strip the slash if using space-separated syntax
  if (rgba.indexOf("/") > -1)
    rgba.splice(3,1);

  for (let R in rgba) {
    let r = rgba[R];
    if (r.indexOf("%") > -1) {
      let p = r.substr(0,r.length - 1) / 100;

      if (R < 3) {
        rgba[R] = Math.round(p * 255);
      } else {
        rgba[R] = p;
      }
    }
  }
  let r = (+rgba[0]).toString(16),
      g = (+rgba[1]).toString(16),
      b = (+rgba[2]).toString(16),
      a = Math.round(+rgba[3] * 255).toString(16);

  if (r.length == 1)
    r = "0" + r;
  if (g.length == 1)
    g = "0" + g;
  if (b.length == 1)
    b = "0" + b;
  if (a.length == 1)
    a = "0" + a;
  let hexStr = "#" + r + g + b + a;
  if (hexStr == "#00000000") {
    hexStr = "#FFFFFF";
  }
  return hexStr;
}
function EffectMoveBox(el) {
  let x = 0
  let y = 0
  let mousedown = false
  let parents = $(el).parents('body')
  el.addEventListener('mousedown', function (e) {
    mousedown = true
    x = el.offsetLeft - e.clientX
    y = el.offsetTop - e.clientY
  }, true)

  el.addEventListener('mouseup', function (e) {
    mousedown = false
  }, true)
  $(parents).mousemove(function (e) {
    // Is mouse pressed 
    if (mousedown) {
      // Now we calculate the difference upwards 
      el.style.left = e.clientX + x + 'px'
      el.style.top = e.clientY + y + 'px'
    }
  })
}

function ChangeForHTag(num, el) {
  switch (num) {
    case 1: {
      $(el)[0].innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
      break
    }
    case 2: {
      $(el)[0].innerHTML = `Lorem ipsum dolor sit amet.` + `</br>` + `Lorem ipsum dolor sit amet consectetur adipisicing elit.`
      break
    }
    case 3: {
      $(el)[0].innerHTML = `Lorem ipsum dolor sit amet.` + `</br>` + `Lorem ipsum dolor sit amet consectetur adipisicing elit.` + `</br>` + `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia, recusandae!`
      break
    }
    case 4: {
      $(el)[0].innerHTML = `asdbLorem ipsum dolor sit amet.` + `</br>` + `Lorem ipsum dolor sit amet</br>nkasd4consectetur adipisicing elit.` + `</br>` + `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia, recusandae!`
      break
    }
    default: {
      $(el)[0].innerHTML = $(content)[0].innerHTML
      break
    }
  }
}

function ChangeForATag(num, el) {
  switch (num) {
    case 1: {
      $(el)[0].innerHTML = 'Lorem'
      break
    }
    case 2: {
      $(el)[0].innerHTML = `Lorem ipsum`
      break
    }
    case 3: {
      $(el)[0].innerHTML = `Lorem ipsum dolor`
      break
    }
    case 4: {
      $(el)[0].innerHTML = `asdbLorem ipsum dolor sit amet`
      break
    }
    default: {
      $(el)[0].innerHTML = $(content)[0].innerHTML
      break
    }
  }
}

function ChangeForPTag(num, el) {
  switch (num) {
    case 1: {
      $('.append-conent').remove()
      $(el).css('display', 'block')
      $(el)[0].innerText = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum dicta quae tempora tenetur autem asperiores adipisci, error libero laboriosam mollitia?'
      break;
    }
    case 2: {
      $('.append-conent').remove()
      $(el).css('display', 'block')
      $(el)[0].innerText = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti exercitationem reiciendis neque labore accusantium saepe odit eum sint odio molestiae illo, dolores at magnam doloribus repellendus aperiam ipsam aliquid sed.'
      break;
    }
    case 3: {
      $('.append-conent').remove()
      let appendContent = document.createElement('div')
      $(appendContent).addClass('append-conent')
      let ul = document.createElement('ul')
      ul.innerHTML = `
        <li>Lorem ipsum dolor sit amet.</li>
        <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>
        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi culpa quas incidunt sint! Tempora, totam!</li>
        <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos praesentium dolorum eum? Consequatur quasi vitae deleniti dignissimos repellendus sint itaque.</li>
      `
      $(appendContent).append(ul)
      $(el)[0].after(appendContent)
      $(el).css('display', 'none')
      break;
    }
    case 4: {
      $('.append-conent').remove()
      $(el).css('display', 'block')
      $(el)[0].innerHTML = `
      <img class="size-full wp-image-543 alignright" style="float: right;margin-left: 30px;border: none;margin-top: 10px;margin-bottom: 10px;" src="https://ascent360-develop.ubu.carbon8test.com/wp-content/uploads/2019/08/Sunpeaks-logo.jpg" alt="Sunpeaks logo" width="200" height="120">
      Set among three alpine peaks in British Columbia, Canada, and receiving more than 2,000 hours of sunshine each year, Sun Peaks Resort is well-known for snow sports, but offers recreational options for every season. With a network of lodges and activities ranging from skiing, snowboarding and dogsledding to biking, hiking and golfing, the resort sought a deeper understanding of its prospects and guests to deliver timely offers and announcements related to each person’s specific interests.
      `
      break;
    }
    default: {
      $(el)[0].innerText = $(content)[0].innerText
      break;
    }
  }
}

function ChangeForIMGTag(el) {
  let arrayImage = [
    'https://picsum.photos/id/125/900/300',
    'https://picsum.photos/id/610/200/300',
    'https://picsum.photos/id/431/2000/500',
    'https://picsum.photos/id/321/2000/2000',
  ]
  let imgRamdom = arrayImage[Math.floor(Math.random() * arrayImage.length)]
  if ($(el)[0].nodeName == 'IMG') {
    $(el)[0].src = imgRamdom
  } else {
    $(el).css('background-image', "url(" + imgRamdom + ")")
  }
}

function CreateBodyText() {
  let bodyText = document.createElement('div')
  $(bodyText).addClass('append-conent')
  let tagP = document.createElement('p')
  tagP.innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, dignissimos?`
  let tagP2 = document.createElement('p')
  tagP2.innerHTML = `	Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium delectus iure et debitis dolorum aperiam, officiis tempora corrupti hic dolor.`
  let ul = document.createElement('ul')
  ul.innerHTML = `
    <li>Lorem ipsum dolor sit amet.</li>
    <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>
    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi culpa quas incidunt sint! Tempora, totam!</li>
    <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos praesentium dolorum eum? Consequatur quasi vitae deleniti dignissimos repellendus sint itaque.</li>
    `
  $(bodyText).append(tagP, ul, tagP2)
  return bodyText
}

function AllCardBasic() {
  let cardBasic = document.createElement('div')
  $(cardBasic).addClass('append-conent')
  cardBasic.innerHTML = `<h2>What is Lor<a href="#">em I</a>psum?</h2>
  <p><strong>Lorem Ipsum</strong> is simply dummy text of the prin<a href="#">ting and typesetting i</a>ndustry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
  <h3>What is Lor<a href="#">em I</a>psum?</h3>
  <p><strong>Lorem Ipsum</strong> is simply dummy text of the prin<a href="#">ting and typesetting i</a>ndustry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
  <h4>What is Lor<a href="#">em I</a>psum?</h4>
  <p><strong>Lorem Ipsum</strong> is simply dummy text of the prin<a href="#">ting and typesetting i</a>ndustry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
  <h5>What is Lor<a href="#">em I</a>psum?</h5>
  <p><strong>Lorem Ipsum</strong> is simply dummy text of the prin<a href="#">ting and typesetting i</a>ndustry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
  <h6>What is Lor<a href="#">em I</a>psum?</h6>
  <p><strong>Lorem Ipsum</strong> is simply dummy text of the prin<a href="#">ting and typesetting i</a>ndustry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
  <ul>
    <li><strong>Lorem Ipsum</strong> is simply dummy text of the prin<a href="#">ting and typesetting i</a>ndustry.</li>
    <li><strong>Lorem Ipsum</strong> is simply dummy text of the prin<a href="#">ting and typesetting i</a>ndustry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. <ol>
    <li><strong>Lorem Ipsum</strong> is simply dummy text of the prin<a href="#">ting and typesetting i</a>ndustry.</li>
    <li><strong>Lorem Ipsum</strong> is simply dummy text of the prin<a href="#">ting and typesetting i</a>ndustry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </li>
    <li><strong>Lorem Ipsum</strong> is simply dummy text of the prin<a href="#">ting and typesetting i</a>ndustry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</li>
  </ol></li>
    <li><strong>Lorem Ipsum</strong> is simply dummy text of the prin<a href="#">ting and typesetting i</a>ndustry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</li>
  </ul>
  <p><strong>Lorem Ipsum</strong> is simply dummy text of the prin<a href="#">ting and typesetting i</a>ndustry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
  <ol>
    <li><strong>Lorem Ipsum</strong> is simply dummy text of the prin<a href="#">ting and typesetting i</a>ndustry.</li>
    <li><strong>Lorem Ipsum</strong> is simply dummy text of the prin<a href="#">ting and typesetting i</a>ndustry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. <ol>
    <li><strong>Lorem Ipsum</strong> is simply dummy text of the prin<a href="#">ting and typesetting i</a>ndustry.</li>
    <li><strong>Lorem Ipsum</strong> is simply dummy text of the prin<a href="#">ting and typesetting i</a>ndustry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </li>
    <li><strong>Lorem Ipsum</strong> is simply dummy text of the prin<a href="#">ting and typesetting i</a>ndustry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</li>
  </ol></li>
    <li><strong>Lorem Ipsum</strong> is simply dummy text of the prin<a href="#">ting and typesetting i</a>ndustry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</li>
  </ol>
  <p><strong>Lorem Ipsum</strong> is simply dummy text of the prin<a href="#">ting and typesetting i</a>ndustry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
  <p><strong><img class="size-full wp-image-547 alignleft" src="https://ascent360.ubu.carbon8test.com/wp-content/uploads/2019/08/PineMountain.jpg" alt="Pine Mountain" width="200" height="200" />Lorem Ipsum</strong> is simply dummy text of the prin<a href="#">ting and typesetting i</a>ndustry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
  <p><strong><img class="size-full wp-image-545 alignright" src="https://ascent360.ubu.carbon8test.com/wp-content/uploads/2019/08/GP.jpg" alt="GP" width="200" height="200" />Lorem Ipsum</strong> is simply dummy text of the prin<a href="#">ting and typesetting i</a>ndustry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
  <p><strong>Lorem Ipsum</strong> is simply dummy text of the prin<a href="#">ting and typesetting i</a>ndustry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
  <p><strong>Lorem Ipsum</strong> is simply dummy text of the prin<a href="#">ting and typesetting i</a>ndustry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
  <p><strong>Lorem Ipsum</strong> is simply dummy text of the prin<a href="#">ting and typesetting i</a>ndustry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
  <table style="border-collapse: collapse; width: 100%;">
  <tbody>
  <tr>
  <td style="width: 33.9277%;">
  <h3><strong>Lorem Ipsum</strong> is simply dummy text of the prin<a href="#">ting and typesetting i</a>ndustry</h3>
  </td>
  <td style="width: 35.4135%;"><strong>Lorem Ipsum</strong> is simply dummy text of the prin<a href="#">ting and typesetting i</a>ndustry. <strong>Lorem Ipsum</strong> is simply dummy text of the prin<a href="#">ting and typesetting i</a>ndustry</td>
  <td style="width: 30.6587%;">
  <ul>
    <li><strong>Lorem Ipsum</strong> is simply dummy text of the prin<a href="#">ting and typesetting i</a>ndustry</li>
    <li><strong>Lorem Ipsum</strong> is simply dummy text of the prin<a href="#">ting and typesetting i</a>ndustry</li>
    <li><strong>Lorem Ipsum</strong> is simply dummy text of the prin<a href="#">ting and typesetting i</a>ndustry</li>
  </ul>
  </td>
  </tr>
  <tr>
  <td style="width: 33.9277%;"><strong>Lorem Ipsum</strong> is simply dummy text of the prin<a href="#">ting and typesetting i</a>ndustry. <strong>Lorem Ipsum</strong> is simply dummy text of the prin<a href="#">ting and typesetting i</a>ndustry <strong>Lorem Ipsum</strong> is simply dummy text of the prin<a href="#">ting and typesetting i</a>ndustry <strong>Lorem Ipsum</strong> is simply dummy text of the prin<a href="#">ting and typesetting i</a>ndustry</td>
  <td style="width: 35.4135%;"><strong>Lorem Ipsum</strong> is simply dummy text of the prin<a href="#">ting and typesetting i</a>ndustry</td>
  <td style="width: 30.6587%;">
  <h5><strong>Lorem Ipsum</strong> is simply dummy text of the prin<a href="#">ting and typesetting i</a>ndustry</h5>
  </td>
  </tr>
  <tr>
  <td style="width: 33.9277%;"><strong>Lorem Ipsum</strong> is simply dummy text of the prin<a href="#">ting and typesetting i</a>ndustry</td>
  <td style="width: 35.4135%;">
  <ol>
    <li><strong>Lorem Ipsum</strong> is simply dummy text of the prin<a href="#">ting and typesetting i</a>ndustry</li>
    <li><strong>Lorem Ipsum</strong> is simply dummy text of the prin<a href="#">ting and typesetting i</a>ndustry</li>
    <li><strong>Lorem Ipsum</strong> is simply dummy text of the prin<a href="#">ting and typesetting i</a>ndustry. <strong>Lorem Ipsum</strong> is simply dummy text of the prin<a href="#">ting and typesetting i</a>ndustry</li>
  </ol>
  </td>
  <td style="width: 30.6587%;">
  <h4><strong>Lorem Ipsum</strong> is simply dummy text of the prin<a href="#">ting and typesetting i</a>ndustry</h4>
  </td>
  </tr>
  </tbody>
  </table>`
  return cardBasic
}

function Ramdomcontent() {
  let selected = $('.select-state')
  let randomNumber = Math.floor(Math.random() * 4 + 1);
  let content = $('body').find('.highlight-ex')
  let arrH = ['H1', 'H2', 'H3', 'H4', 'H5', 'H6']
  if (arrH.includes($(content)[0].nodeName)) {
    if ($(selected).val() == 1) {
      $(content)[0].innerText = WonderTest.contentOld
    } else {
      ChangeForHTag(randomNumber, content)
    }
  } else if ($(content)[0].nodeName == 'P') {
    if ($(selected).val() == 1) {
      $(content).css('display', 'block')
      $('.append-conent').remove()
      $(content)[0].innerText = WonderTest.contentOld
      flag = 1
    }
    if ($(selected).val() == 2) {
      if ($(content)[0].nodeName == 'P') {
        ChangeForPTag(randomNumber, content)
      }
    }
    if ($(selected).val() == 3) {
      $('.append-conent').remove()
      $(content).css('display', 'none')
      $(content)[0].after(CreateBodyText())
    }
    if ($(selected).val() == 4) {
      $('.append-conent').remove()
      $(content).css('display', 'none')
      $(content)[0].after(AllCardBasic())
    }
  } else if ($(content)[0].nodeName == 'A') {
    if ($(selected).val() == 1) {
      $(content)[0].innerText = WonderTest.contentOld
    } else {
      ChangeForATag(randomNumber, content)
    }
  } else if ($(content).css('background-image') != 'none' || $(content)[0].nodeName == 'IMG') {
    if ($(selected).val() == 1) {
      if ($(content).css('background-image') != 'none') {
        $(content).css('background-image', WonderTest.contentOld)
      } else {
        $(content)[0].src = WonderTest.contentOld
      }
    } else {
      ChangeForIMGTag(content)
    }
  }
  $('#popup-hover').remove()
}

function DetecColor(el) {
  let color
  if($(el).css('color').match(/rgba/)) {
    return ConvertRGBAToHex($(el).css('color'))
  } else if($(el).css('color').match(/rgb/)) {
   return ConvertRGBToHex($(el).css('color'))
  }
}
function DetecBGColor(el) {
  if($(el).css('background-color').match(/rgba/)) {
    return ConvertRGBAToHex($(el).css('background-color'))
  } else if($(el).css('background-color').match(/rgb/)) {
    return ConvertRGBToHex($(el).css('background-color'))
  }
}

function createAttBackground(getProp, image) {
  let colorBG = DetecBGColor(el)
  let background = `<div class="background-ex seperate-ex">
  <h4>Background Attribute</h4>
  <ul>
    <li>Background-position:&nbsp;${image.style.backgroundPosition}</li>
    <li>Background-color:&nbsp;${colorBG}<span style="width: 22px;display: inline-table;margin-left: 10px;border: 1px solid ${ colorBG == '#FFFFFF'? 'black': colorBG };background-color: ${colorBG};">&nbsp;</span></li>
    <li>Width:&nbsp;${getProp.getPropertyValue('width')}</li>
    <li>Max-width:&nbsp;${getProp.getPropertyValue('max-width')}</li>
    <li>Height:&nbsp;${getProp.getPropertyValue('height')}</li>
    <li>Max-height:&nbsp;${getProp.getPropertyValue('max-height')}</li>
  </ul>
  </div>`
  return background
}

function createAttImage(getProp, image) {
  let imageProperty = `<div class="background-ex seperate-ex">
  <h4>Image Attribute</h4>
  <ul>
    <li>Alt:&nbsp;${image.alt}</li>
    <li>Width:&nbsp;${getProp.getPropertyValue('width')}</li>
    <li>Max-width:&nbsp;${getProp.getPropertyValue('max-width')}</li>
    <li>Height:&nbsp;${getProp.getPropertyValue('height')}</li>
    <li>Max-height:&nbsp;${getProp.getPropertyValue('max-height')}</li>
  </ul>
  </div>`
  return imageProperty
}

function createNormalProperty(getProp) {
  let normalProperty = `<div class="normal-ex seperate-ex">
  <h4>Normal Attribute</h4>
  <ul>
    <li>Width:&nbsp;${getProp.getPropertyValue('width')}</li>
    <li>Height:&nbsp;${getProp.getPropertyValue('height')}</li>
    <li>Border:&nbsp;${getProp.getPropertyValue('border')}</li>
    <li>Border-radius:&nbsp;${getProp.getPropertyValue('border-radius')}</li>
    <li>Box-shadow:&nbsp;${getProp.getPropertyValue('box-shadow')}</li>
  </ul>
  </div>`
  return normalProperty
}

function getHoverCss(el) {
  let colorBG = DetecBGColor(el)
  let color = DetecColor(el)
  let hoverProperty = `
  <div class="hover-ex seperate-ex">
  <h4>Hover Attribute</h4>
  <ul>
    <li>Background-color:&nbsp;${colorBG}  <span style="width: 22px;display: inline-table;margin-left: 10px;border: 1px solid #000;background-color: ${colorBG};">&nbsp;</span></li>
    <li>Color:&nbsp;${color} <span style="width: 22px;display: inline-table;margin-left: 10px;border: 1px solid ${color};background-color: ${color};">&nbsp;</span></li>
    <li>Position:&nbsp;${$(el).css('position')}</li>
    <li>Transform:&nbsp;${$(el).css('transform')}</li>
    <li>Opacity:&nbsp;${$(el).css('opacity')}</li>
    </ul>
  </div>`
  return hoverProperty
}

//get hover property
function getHoverCssChange(el) {
  let colorBG = DetecBGColor(el)
  let color = DetecColor(el)
  let hoverPropertyChange = `
  <div class="hover-change-ex seperate-ex" style="max-width: 0; padding: 0;">
  <h4>Font Attribute</h4>
  <ul>
    <li>Background-color:&nbsp;${colorBG}  <span style="width: 22px;display: inline-table;margin-left: 10px;border: 1px solid #000;background-color: ${colorBG};">&nbsp;</span></li>
    <li>Color:&nbsp;${color} <span style="width: 22px;display: inline-table;margin-left: 10px;border: 1px solid ${color};background-color: ${color};">&nbsp;</span></li>
    <li>Font-size:&nbsp;${$(el).css('font-size')}</li>
        <li>Font-weight:&nbsp;${$(el).css('font-weight')}</li>
        <li>Opacity:&nbsp;${$(el).css('opacity')}</li>
        <li>Font-family:&nbsp;${$(el).css('font-family')}</li>
        <li>Line-height:&nbsp;${$(el).css('line-height')}</li>
        <li>Text-align:&nbsp;${$(el).css('text-align')}</li>
        <li>Letter-spacing:&nbsp;${$(el).css('letter-spacing')}</li>
        
    </ul>
  </div>`
  return hoverPropertyChange
}

function EventClick(e) {
  let el = e.target
  // fix tam hover
  var elements = WonderTest.GetAllElements(document.body);
  for (var i = 0; i < elements.length; i++) {
    elements[i].removeEventListener("mouseover", EventHover, false);
  }
  if (!$(e.target).is('.popup-font, .popup-font *, .open-ex, .open-ex button')) {
    e.preventDefault()
    let getProp = window.getComputedStyle(el, null)
    let popupNew = document.getElementById('popup-ex')
    if (popupNew != null) {
      popupNew.remove()
      $(pastEl).removeClass('highlight-ex')
    }
    $(el).addClass('highlight-ex')
    // check tag la bg hay img hay text
    WonderTest.contentOld = $(el)[0].innerText
    if ($(el).css('background-image') != 'none') {
      WonderTest.contentOld = $(el)[0].style.backgroundImage
    } else if ($(el)[0].nodeName == 'IMG') {
      WonderTest.contentOld = $(el)[0].src
    } else {
      WonderTest.contentOld = $(el)[0].innerText
    }
    let newEl = document.createElement('div')
    newEl.setAttribute('id', 'popup-ex')
    newEl.innerHTML = `<div class="card-ex popup-font" id="popup-detail" >
    <div class="card-des">
      <div class="tag-element">
        <h4>${$(el).css('background-image') != 'none'? $(el)[0].nodeName + ' - BG': $(el)[0].nodeName}</h4>
      </div>
      <div>
        <button id="editCotent"><img src="${chrome.runtime.getURL('images/update.png')}"/></button>
        <select class="select-state">
        <option value="2">Random</option>
        <option value="3">Body content</option>
        <option value="1">Refesh</option>
        <option value="4">All card basic</option>
        </select>
      </div>
      <div class="btn-element">
  <button id="btnClose"><img src="${chrome.runtime.getURL('images/close_icon.png')}"/></button>
      </div>
    </div>
    <div class="card-content">
      <div class="font-ex seperate-ex">
        <h4>Font Attribute</h4>
        <ul>
        <li>Font-size:&nbsp;${getProp.getPropertyValue('font-size')}</li>
        <li>Font-weight:&nbsp;${getProp.getPropertyValue('font-weight')}</li>
        <li>Font-family:&nbsp;${getProp.getPropertyValue('font-family')}</li>
        <li>Line-height:&nbsp;${getProp.getPropertyValue('line-height')}</li>
        <li>Text-align:&nbsp;${getProp.getPropertyValue('text-align')}</li>
        <li>Letter-spacing:&nbsp;${getProp.getPropertyValue('letter-spacing')}</li>
        <li>Opacity:&nbsp;${$(el).css('opacity')}</li>
        </ul>
      </div>
      ${ $(el)[0].nodeName == 'IMG'? createAttImage(getProp, $(el)[0]): ($(el).css('background-image') != 'none' ? createAttBackground(getProp, $(el)[0]): createNormalProperty(getProp))}
    </div>
    </div>`
    document.body.appendChild(newEl)
    let styleNew = document.getElementById('popup-detail')
    let cardContent = document.getElementsByClassName('card-content')
    // $(styleNew).css('height', '360px')
    $(styleNew).css('height', 158 + cardContent[0].clientHeight + 10 + 'px')

    if($(el).offset().top >= 8300 ){
      $(styleNew).css('top', -370 + $(el).offset().top - $(el).innerHeight() + 'px')
    }else {
      if ($(el).css('cursor') == 'pointer') {
        $(styleNew).css('top', $(el).offset().top + 'px')
  
      } else {
        $(styleNew).css('top', $(el).innerHeight() + $(el).offset().top + 'px')
        $('.hover-ex').css('display', 'none')
      }
    }

    // $(styleNew).css('top', $(el).offset().top + 'px')
    $(styleNew).css('left', $(el).offset().left + 'px')
    $('.font-ex').after(getHoverCss(el))
    $('.hover-ex').css('max-width', '290px')
    $('.hover-ex').css('padding-right', '15px')
    $('.hover-ex').css('padding-left', '15px')
    if ($(el).css('cursor') != 'pointer') {
      $('.hover-ex').css('display', 'none')
    }
    //-----------------TH2------------
    setTimeout(() => {
      // getHoverCssChange(el)
      $('.hover-change-ex').remove()
      if( WonderTest.eleHasFontSize.includes($(el)[0].nodeName) ){
        $('.font-ex').after(getHoverCssChange(el))
        setTimeout(() => {
          $('.hover-change-ex').css({
            'max-width': '',
            'padding': ''
          })
        }, 50)
      }
      //check if IMG
      // if ($(el)[0].nodeName == 'IMG') {
      //   $('.hover-change-ex').css('display', 'none')
      // }
    }, 500)

    pastEl = el // gán el click trước để remove  .card-ex-edit, .card-ex-edit*
  }
  $('#editCotent').click(btnEditClick(e))
  $('#hoverEffect').click(btnHoverClick(pastEl))
  // $('#btnClose').click(function (e) {
  //   WonderTest.Disable();
  // })
  let addEF = document.getElementById('popup-detail')
  if ($(addEF).length > 0) {
    EffectMoveBox(addEF)
  }
  e.stopPropagation()
}

function EventHover(e) {
  let el = e.target
  let getProp = window.getComputedStyle(el, null)
  if (!$(e.target).is('.popup-font, .popup-font *, .open-ex, .open-ex button')) {
    if ($('#popup-hover').length) {
      $(pastEl).removeClass('highlight-ex')
      $('#popup-hover').remove()
    }
    let hoverEl = document.createElement('div')
    hoverEl.setAttribute('id', 'popup-hover')
    hoverEl.innerHTML = `
    <div class="hover-element">
      <h4>${$(el).css('background-image') != 'none'? $(el)[0].nodeName + ' - BG': $(el)[0].nodeName}</h4>
      <p class="width-box">${getProp.getPropertyValue('width').substring(0, getProp.getPropertyValue('width').indexOf('px'))}x${getProp.getPropertyValue('height').substring(0,getProp.getPropertyValue('height').indexOf('px'))}</p>
    </div>`
    document.body.appendChild(hoverEl)
    let styleHover = document.getElementById('popup-hover')
    $(styleHover).css('top', $(el).offset().top - 5 + 'px')
    $(styleHover).css('left', $(el).offset().left + 'px')
    let elHoverBox = $(styleHover).find('.hover-element')
    let tagEl = $(elHoverBox).find('h4')
    let tagPEl = $(elHoverBox).find('.width-box')
    $(elHoverBox).css('width', 20 + $(tagEl).outerWidth() + $(tagPEl).outerWidth())
    if (!$(this).hasClass('highlight-ex')) {
      $(this).addClass('highlight-ex')
    }
    pastEl = el
    e.stopImmediatePropagation()
  }
}

function btnEditClick(e) {
  if ($(e.target).is('.popup-font #editCotent img')) { //$(e.target).is('.select-state') ||
    Ramdomcontent()
  }
}

function btnHoverClick(e) {
  if ($(e.target).is('.popup-font #editCotent')) {
    Ramdomcontent()
  }
}

function WonderKeyMap(e) {
  if (e.keyCode === 27) {
    WonderTest.Disable();
  }
}

function WonderTest() {
  this.createPopup = function () {
    let newEl = document.createElement('div')
    newEl.setAttribute('id', 'popup-ex')
    newEl.innerHTML = `<div class="card-ex popup-font" id="popup-detail" style="display: none" >
    <div class="card-des">
      <span>Tag Element: </span>&nbsp;<h4>content</h4>
    </div>
    <div class="card-content">
    </div>
    <div class="card-button">
      <button id="editCotent">Edit</button>
    </div>
    </div>`
    document.body.appendChild(newEl)
  }
  this.GetAllElements = function (element) {
    var elements = new Array();

    if (element && element.hasChildNodes()) {
      elements.push(element);

      var childs = element.childNodes;

      for (var i = 0; i < childs.length; i++) {
        if (childs[i].hasChildNodes()) {
          elements = elements.concat(this.GetAllElements(childs[i]));
        } else if (childs[i].nodeType == 1) {
          elements.push(childs[i]);
        }
      }
    }
    return elements;
  }
  this.eleHasFontSize = ['H1','H2','H3','H4','H5','H6', 'A', 'P','SPAN' ]
  this.eleDontHasFontSize = ['IMG', 'BG']
  this.eleDontHas = ['DIV']
  this.haveEventListeners = false;
  this.contentOld = ''
  this.valueHexa = new Array(
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'A',
    'B',
    'C',
    'D',
    'E',
    'F'
  )
  this.AddEventListeners = function () {
    var document = GetCurrentDocument();
    var elements = this.GetAllElements(document.body);
    for (var i = 0; i < elements.length; i++) {
      if($(elements[i]).is('a.ps-as')) {
        $(elements[i]).addClass('ex-d-none')
        $(elements[i]).parent().addClass('pointer-ex')
      }
      if (!$(elements[i]).is('.open-ex, .open-ex button')) {
        elements[i].addEventListener("click", EventClick, false);
        elements[i].addEventListener("mouseover", EventHover, false);
      }
    }
    this.haveEventListeners = true;
  }
  this.RemoveEventListeners = function () {
    var document = GetCurrentDocument();
    var elements = this.GetAllElements(document.body);
    let elHighLight = $(elements).find('.highlight-ex')
    let exPopup = $(elements).find('#popup-ex')
    let exPopupHover = $(elements).find('#popup-hover')
    if (elHighLight.length > 0) {
      $(elHighLight).removeClass('highlight-ex')
      $(exPopup).remove()
      $(exPopupHover).remove()
    }
    for (var i = 0; i < elements.length; i++) {
      if($(elements[i]).hasClass('ex-d-none')) {
        $(elements[i]).removeClass('ex-d-none')
        $(elements[i]).parent().removeClass('pointer-ex')
      }
      elements[i].removeEventListener("click", EventClick, false);
      elements[i].removeEventListener("mouseover", EventHover, false);
    }
    this.haveEventListeners = false;
  }
}

WonderTest.prototype.Enable = function () {
  let divClose = document.createElement('div')
  $(divClose).addClass('open-ex')
  divClose.innerHTML = `
  <button class="btnGlobal">Exit Tool</button>`
  document.body.appendChild(divClose)
  this.AddEventListeners();
}
WonderTest.prototype.Disable = function () {
  if ($('.open-ex').length > 0) {
    $('.open-ex').remove()
  }
  this.RemoveEventListeners();
}

WonderTest = new WonderTest()

if (WonderTest.haveEventListeners === false) {
  WonderTest.Enable()
} else {
  WonderTest.Disable()
}
$("body").on('click', '#btnClose', () => {
  let popupNew = document.getElementById('popup-ex')
  if (popupNew != null) {
    popupNew.remove()
    $(pastEl).removeClass('highlight-ex')
    $('#popup-hover').remove()
  }
  var elements = WonderTest.GetAllElements(document.body);
  for (var i = 0; i < elements.length; i++) {
    if (!$(elements[i]).is('.open-ex, .open-ex button')) {
      elements[i].addEventListener("mouseover", EventHover, false);
    }
  }
})
$('.btnGlobal').click(function (e) {
  WonderTest.Disable()
})
//tooltip css
document.onkeydown = WonderKeyMap;