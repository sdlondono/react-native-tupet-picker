import * as Constants from '../../../Constants'
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_native_1 = require("react-native");
var defaultFieldTemplate = function (_a) {
    var getLabel = _a.getLabel, defaultText = _a.defaultText, selectedItem = _a.selectedItem, validate = _a.validate, clear = _a.clear, containerStyle = _a.containerStyle, textStyle = _a.textStyle, clearImage = _a.clearImage;

    return (React.createElement(react_native_1.View, {
        style: [
            {
                borderBottomColor: 'grey',
                borderBottomWidth: 1,
                height: 30,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                margin: 5
            },
            containerStyle
        ]
    },
        React.createElement(react_native_1.Text, { style: { textStyle, fontSize: (validate) ? 20 : 11, alignItems: 'center', color: '#999999', fontFamily: Constants.FONT_TEXT } }, (selectedItem && getLabel(selectedItem)) || defaultText),
        selectedItem && (React.createElement(react_native_1.Image, {
            style: { width: 10, height: 8 }, source: {
                uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAArCAYAAAA65tviAAAACXBIWXMAAAsSAAALEgHS3X78AAACEklEQVRogdWZP07DMBSHf4SFlbEbnABuQI+A1L3iCLkB6Q3akY1mj0RvQG/Qih3RKSs9QZGrF5TIjv882038TSVWSz89/57N4+p0OkEwmc1zAM9Iix2AZV2VP2eRyWz+CeApMYmGI4DH67ev7ymAV2k5HW4A3GYApglLNNxltM9S5z8jQuYhYZn7jF7k0lI6rETXOovUVSm61jpBCdGxCvEiaz3MaSEl8roqfzsi9KBISGJbV+V780O7IkJmCeAgvWWcdHKdKb7ii/RkfKzrquwcG5IIBX8zYomjqstKIsSYg180AW+jFBF9WdwqpYXh2VOOJZQiJFOMMPjSlmroFTG9cQDWlF8lWpG6Kj9Ev5YWLs/RdMZpRYgxtOMl5bYXowh9wEJauBwHyqsWm4qAOthQwbfaEVYiA97DNrqAt7GtCOiCdungW3dNaxHXDw7AwhRwtghd1FbSQngOrjcL14qAshL7Hpar7lM6nEXoF8TcYls6iJ3gVKQJ/l5aCAPrAGaJEDGqsnIJeBu2SITJi/E+pcOnIgj8B5hzwNt4iQQ88TsTEQ6+FQk1efHOm7cI4XPVlyYiHIKIeExelBMRDqEqAmbwlRMRDsFEGJOX3okIh5AVcZ28BD1Qg4oQNl9QOxHhEFzEYvLidYL3EaMiMLRj40SEQxQRzeRlbzMR4RCrIk3whYzYZqIBiAtmnH+FA/gDcxbTqRL0HeUAAAAASUVORK5CYII='
            }
        }))));
};
exports.default = defaultFieldTemplate;