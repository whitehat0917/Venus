import React from "react";
import Switch from "react-switch";

const SwitchComponent = ({ switchValue, handleSwitch, name }) => {

    const handleChange = (value) => {
        handleSwitch(value, name);
    }

    return (
        <Switch
            onColor="#090d27"
            offColor="#090d27"
            onHandleColor="#ff481c"
            offHandleColor='#666771'
            handleDiameter={18}
            uncheckedIcon={false}
            checkedIcon={false}
            boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
            activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
            height={13}
            width={40}
            className="react-switch"
            onChange={handleChange}
            checked={switchValue} 
        />
    )
}
export default SwitchComponent