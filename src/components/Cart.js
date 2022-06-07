import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { Div, SideDrawer, Text, Row, Col, Anchor, Container, Icon } from "atomize";
export default function Cart() {

    const { isCartOpen, closeCart, checkout } = useContext(ShopContext);

    if (checkout.lineItems) {
        return (
            <SideDrawer isOpen={isCartOpen} onClose={closeCart} className='cart'>
                <Container d="flex" flexDir="column" h="100%">
                    <Row justify="space-between" border={{ b: '1px solid' }} p="0.7rem" borderColor="gray300">
                        <Text></Text>
                        <Anchor onClick={() => closeCart()} ><Icon name="Cross" color="#57c44d"/></Anchor>
                    </Row>
                    <Row flexGrow="2" p="0.7rem" overflow="auto" flexWrap="nowrap" flexDir="column">
                        {checkout.lineItems.length < 1 ?
                            <Row>
                                <Col><Text>tote is empty</Text></Col>
                            </Row>
                            :
                            <>
                                {checkout.lineItems && checkout.lineItems.map(item => (
                                    <Row key={item.id} p={{ t:"5px" }}>
                                        <Col>
                                            <Div bgImg={item.variant.image.src} bgSize="cover" bgPos="center" h="5rem" w="4rem"/>
                                        </Col>
                                        <Col>
                                            <Text>{item.title}</Text>
                                            <Text>size: {item.variant.title}</Text>
                                            <Text>quantity: {item.quantity}</Text>
                                        </Col>
                                        <Col>
                                            <Text>{item.variant.price}</Text>
                                        </Col>
                                    </Row>
                                ))}
                            </>
                        }
                    </Row>
                    <Row border={{ t: '1px solid' }} p="0.7rem" borderColor="gray300">
                        <Anchor w="100%" href={checkout.webUrl} target="_blank" rel="noopener noreferrer">
                            <button>
                                Checkout
                            </button>
                        </Anchor>
                    </Row>
                </Container>
            </SideDrawer>
        )
    }

    return null

}