import { Avatar, Container, Divider, Flex, IconButton, useDisclosure } from "@chakra-ui/react"
import 'boxicons'
import { useState } from "react"
import SettingDrawer from "../drawer/SettingDrawer"
import LogoutModal from "../modal/LogoutModal"
import AddFriendDrawer from "../drawer/AddFriendDrawer"
const Sidebar = () => {
    const [isSettingDrawerOpen, setSettingDrawerOpen] = useState(false);
    const [isLogoutModalOpen, setLogoutModalOpen] = useState(false);
    const [isAddFriendDrawerOpen, setAddFriendDrawerOpen] = useState(false);
    
    const openSettingDrawer = () => setSettingDrawerOpen(true);
    const closeSettingDrawer = () => setSettingDrawerOpen(false);

    const openLogoutModal = () => setLogoutModalOpen(true);
    const closeLogoutModal = () => setLogoutModalOpen(false);

    const openAddFriendDrawer = () => setAddFriendDrawerOpen(true);
    const closeAddFriendDrawer = () => setAddFriendDrawerOpen(false);

    return(
        <>
        <Flex direction='column' width='6rem' height={'full'} bg='#EE7850' overflow='auto' justifyContent={'space-between'}>
            <Avatar size='sm' margin='1rem' alignSelf='center' visibility='hidden'/>

            <Container display='flex' flexDirection='column' justifyContent='center' alignItems='center' gap='8'>
                <IconButton 
                    icon={<box-icon type='solid' name='chat' color="white" animation="tada-hover" />}
                    colorScheme=''
                    _hover={{bg: '#669bbc'}}
                />

                <IconButton 
                    icon={<box-icon type='solid' name='phone' color="white" animation="tada-hover"/>}
                    colorScheme=''
                    _hover={{bg: '#669bbc'}}
                />
                <IconButton 
                    icon={<box-icon type='solid' name='group' color="white" animation="tada-hover"/>}
                    colorScheme=''
                    _hover={{bg: '#669bbc'}}
                />

                <Divider/>

                <IconButton 
                    icon={<box-icon type='solid' name='plus-circle' color="white" animation="tada-hover"/>}
                    colorScheme=''
                    _hover={{bg: '#669bbc'}}
                    onClick={openAddFriendDrawer}
                />
            </Container>
            
            <Container display='flex' flexDirection='column' justifyContent='center' alignItems='center' gap='2'>
                <IconButton 
                        icon={<box-icon type='solid' name='cog' color="white" animation="tada-hover"/>}
                        colorScheme=''
                        _hover={{bg: 'none'}}
                        onClick={openSettingDrawer}
                    />

                <IconButton 
                        icon={<box-icon type='solid' name='door-open' color="white" animation="tada-hover"/>}
                        colorScheme=''
                        _hover={{bg: 'none'}}
                        onClick={openLogoutModal}
                    />
            </Container>
        </Flex>

        <SettingDrawer isOpen={isSettingDrawerOpen} onClose={closeSettingDrawer} type={'SettingDrawer'}/>
        <LogoutModal isOpen={isLogoutModalOpen} onClose={closeLogoutModal} type={'LogoutModal'}/>
        <AddFriendDrawer isOpen={isAddFriendDrawerOpen} onClose={closeAddFriendDrawer} type={'AddFriendDrawer'}/>
        </>
    )
}
export default Sidebar