import { AbsoluteCenter, Avatar, Box, Button, Container, Flex, Image, Input, Text } from "@chakra-ui/react"
import { useState } from "react"
import { verify } from "../api/verify"
import { registerPhaseStore } from "../state/store"

function RegisterProfile() {
    const [imageUrl, setImageUrl] = useState(null)

    const {  imageState, setImageState } = registerPhaseStore()

    function handleFileChange(event) {
        console.log(`file : ${event.target.files[0]}`)
        setImageState(event.target.files[0])
        setImageUrl(URL.createObjectURL(event.target.files[0]))
    }

    function confirmImage() {
        console.log("confirm image")
        const result = verify()
        console.log(result)
    }

    return(
        <AbsoluteCenter>
            <Container background="white" padding="1rem" borderRadius="lg">
                <Flex gap={3} mb={3}>
                    <Flex>
                        <Box width="full" display="flex" justifyContent="center">
                            {imageUrl ? (
                                <Avatar height="6rem" width="6rem" src={imageUrl} alt="uploaded image" id="imageView" size='full' />
                                ) : (
                                    <Avatar height="6rem" width="6rem" name="I" />
                                    )}
                        </Box>
                    </Flex>

                    <Flex direction="column" justifyContent='space-around'>
                        <Text fontWeight="medium">upload your profile picture</Text>
                        {/* <input id="imageSelector" onChange={handleFileChange} type='file' style={style}></input> */}
                        <Input onChange={handleFileChange} type="file" placeholder="select image" sx={{
                        '::-webkit-file-upload-button': {
                            display: 'none',
                        },
                        '::-moz-file-upload-button': {
                            display: 'none',
                        },
                        '::-ms-browse': {
                            display: 'none',
                        },
                        '::-ms-clear': {
                            display: 'none',
                        },
                        '::-ms-reveal': {
                            display: 'none',
                        },
                        '::-ms-value': {
                            display: 'none',
                        },
                        }}></Input>
                    </Flex>
                </Flex>
                <Button onClick={confirmImage} bg="#0F172A" width="full" color="white" _hover={{bg:"#0F172A"}}>confirm</Button>
            </Container>
        </AbsoluteCenter>
    )
}

export { RegisterProfile }