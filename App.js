import React from 'react';
import {Text, View} from 'react-native';

const App = () => {
	const style = {
		borderWidth: 1,
		borderColor: 'black',
		fontSize: 16,
		lineHeight: 16,
	};
	return (
		<View style={{flexDirection: 'row', flex: 1}}>
			<View
				style={{
					flex: 1,
					flexGrow: 1,
					alignItems: 'center',
					justifyContent: 'center',
					paddingVertical: 30,
				}}>
				<Text style={style}>regular TEXT.</Text>
				<Text style={style}>ALL CAPS text.</Text>
			</View>
		</View>
	);
};

export default App;
