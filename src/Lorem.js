import React from "react";

export default numberOfParagraphs => {
  const loremText = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Adipiscing commodo elit at imperdiet dui accumsan sit amet. Pellentesque sit amet porttitor eget dolor. Aliquam sem et tortor consequat id porta nibh venenatis. Dictum non consectetur a erat nam at. Augue ut lectus arcu bibendum at varius vel pharetra vel. Sit amet purus gravida quis blandit turpis cursus in hac. Enim sed faucibus turpis in eu mi bibendum. Massa ultricies mi quis hendrerit dolor magna eget est lorem. Amet tellus cras adipiscing enim eu turpis egestas pretium aenean. Aliquam nulla facilisi cras fermentum. Vitae auctor eu augue ut lectus.",
    "Convallis tellus id interdum velit laoreet id. Orci phasellus egestas tellus rutrum tellus. Eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque. Tincidunt tortor aliquam nulla facilisi cras fermentum odio eu. Neque vitae tempus quam pellentesque nec nam aliquam sem et. Pharetra diam sit amet nisl suscipit adipiscing bibendum est. Imperdiet proin fermentum leo vel orci porta non. Elit sed vulputate mi sit amet mauris commodo. Vestibulum rhoncus est pellentesque elit ullamcorper dignissim. Et odio pellentesque diam volutpat commodo. Sociis natoque penatibus et magnis dis parturient. Aliquet nibh praesent tristique magna sit amet. Maecenas sed enim ut sem viverra aliquet eget sit. Vitae suscipit tellus mauris a diam. Turpis egestas pretium aenean pharetra magna ac placerat vestibulum lectus. Mattis rhoncus urna neque viverra justo. Vel facilisis volutpat est velit egestas dui id. Tristique et egestas quis ipsum suspendisse ultrices gravida.",
    "Adipiscing bibendum est ultricies integer quis auctor elit sed vulputate. Nisl pretium fusce id velit ut tortor pretium viverra. Purus semper eget duis at tellus. In pellentesque massa placerat duis ultricies. Donec adipiscing tristique risus nec feugiat in fermentum posuere. Eu mi bibendum neque egestas. Nec dui nunc mattis enim ut tellus elementum sagittis vitae. In hac habitasse platea dictumst vestibulum rhoncus est. Risus commodo viverra maecenas accumsan lacus. Feugiat in ante metus dictum. Pulvinar etiam non quam lacus suspendisse faucibus interdum posuere. Cursus sit amet dictum sit. Lorem ipsum dolor sit amet consectetur adipiscing elit duis. In dictum non consectetur a erat nam at. Vitae sapien pellentesque habitant morbi tristique senectus. Erat velit scelerisque in dictum non consectetur a erat nam. Eget felis eget nunc lobortis mattis aliquam faucibus purus in. Lacinia quis vel eros donec ac odio tempor orci dapibus. Arcu non odio euismod lacinia at.",
    "Urna duis convallis convallis tellus id interdum velit laoreet id. Lectus quam id leo in vitae turpis. Sed velit dignissim sodales ut eu sem integer vitae. Sit amet commodo nulla facilisi nullam. Dolor sit amet consectetur adipiscing elit ut aliquam purus sit. Tristique senectus et netus et. Donec pretium vulputate sapien nec sagittis aliquam malesuada. Varius quam quisque id diam vel quam elementum. Massa enim nec dui nunc mattis enim ut tellus. Adipiscing diam donec adipiscing tristique risus nec feugiat. Aliquam vestibulum morbi blandit cursus. Arcu felis bibendum ut tristique et egestas quis ipsum.",
    "Sed risus pretium quam vulputate dignissim suspendisse in est ante. Morbi leo urna molestie at elementum eu. Risus pretium quam vulputate dignissim suspendisse. Consectetur libero id faucibus nisl tincidunt eget. Auctor augue mauris augue neque gravida in. Turpis egestas sed tempus urna et pharetra pharetra massa massa. Penatibus et magnis dis parturient montes. Nunc mi ipsum faucibus vitae aliquet nec ullamcorper sit. Pulvinar neque laoreet suspendisse interdum consectetur libero id faucibus. Enim neque volutpat ac tincidunt vitae semper quis lectus nulla. Nullam ac tortor vitae purus faucibus ornare suspendisse."
  ];
  function getText(quantity, loremText) {
    let result = [];
    for (var i = 0; i < quantity; i++) {
      result.push(loremText[i % loremText.length]);
    }
    return result;
  }
  return (
    <div id="contentBox">
      {console.log(numberOfParagraphs)}
      {getText(numberOfParagraphs.paragraphs, loremText).map(
        (paragraph, index) => {
          return (
            <p key={index}>
              {paragraph}
              {`\u0085 \u0085`}
            </p>
          );
        }
      )}
    </div>
  );
};
