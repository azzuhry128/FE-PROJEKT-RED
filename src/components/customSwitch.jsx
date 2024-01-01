import {
    Switch,
    useToken,
} from "@chakra-ui/react"

function CustomSwitch(
    props
) {
    const [
        thumbColor,
        trackColor,
    ] =
        useToken(
            "colors",
            [
                "#93C5FD",
                "#1E293B",
            ]
        )

    return (
        <Switch
            id="switch"
            sx={{
                ...props.sx,
                track: {
                    bg: trackColor,
                },
                thumb: {
                    bg: thumbColor,
                },
            }}
            {...props}
        />
    )
}

export default CustomSwitch
