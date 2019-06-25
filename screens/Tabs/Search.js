import React from "react";
import styled from "styled-components";
import SearchBar from "../../components/SearchBar";

const View = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const Text = styled.Text``;

export default class extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: (
      <SearchBar
        value={this.state.term}
        onChange={this.onChange}
        onSubmit={() => {}}
      />
    )
  });
  state = {
    term: ""
  };
  onChange = text => {
    this.setState({ text });
  };
  render() {
    return (
      <View>
        <Text>Search</Text>
      </View>
    );
  }
}
