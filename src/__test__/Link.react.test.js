// import React from "react";
// import renderer from "react-test-renderer";
// import Link from "../Link";
// import { act } from 'react-dom/test-utils';


// test("Link changes the class when hovered", () => {
//   const component = renderer.create(
//     <Link page="http://www.facebook.com">Facebook</Link>
//   );
//   let tree = component.toJSON();
//   expect(tree).toMatchSnapshot();

// //  
//   // manually trigger the callback
//   act(()=>{
//     tree[1].props.onMouseEnter();
//   })
  
//   // re-rendering
//   tree = component.toJSON();
//   expect(tree).toMatchSnapshot();

//   // manually trigger the callback
//   tree.props.onMouseLeave();
//   // re-rendering
//   tree = component.toJSON();
//   expect(tree).toMatchSnapshot();
// });
import React from "react";
import renderer from "react-test-renderer";
import Link from "../Link";
const {act} = renderer;

test("Link changes the class when hovered", () => {
  const component = renderer.create(
    <Link page="http://www.facebook.com">Facebook</Link>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

console.log(tree[1].props);
  // manually trigger the callback
  act(() => {
    tree[1].props.onMouseEnter();
  })
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  act(() => {
    tree[1].props.onMouseLeave();
  })
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});


