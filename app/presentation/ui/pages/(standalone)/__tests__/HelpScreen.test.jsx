import { fireEvent, render } from "@testing-library/react-native";
import HelpScreen from "../HelpScreen"
import { router } from "expo-router";


describe('<HomeScreen />', () => {

  //Test case 1
  test('CustomText renders correctly', () => {
    const tree = render(<HelpScreen/>).toJSON();

    expect(tree).toMatchSnapshot();
  });

  //Test case 2
  // test("Should go back on back button press",()=>{
  //   const mockOnPress =jest.fn();


  //   const page = render(<HelpScreen onPress={mockOnPress}/>)

  //   const backButton = page.getByTestId("backButton");
    
  //   fireEvent.press(backButton)

  //   expect(router.back).toHaveBeenCalled();


  // })
});