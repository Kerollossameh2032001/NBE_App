import { useCallback, useEffect, useRef, useState } from "react";
import { Animated, Dimensions, LayoutChangeEvent, PanResponder, PanResponderGestureState, View } from "react-native";


type DragableComponentProps = {
    content: JSX.Element,
    onDrop: (gesture: PanResponderGestureState) => boolean;
    dropAreaPosition: React.MutableRefObject<{
        x: number;
        y: number;
        width: number;
        height: number;
    }>
    index: number,
    setCurrentIndex: React.Dispatch<React.SetStateAction<number | undefined>>
}
const DragableComponent = ({ index, setCurrentIndex, content, onDrop, dropAreaPosition }: DragableComponentProps) => {
    // Create a ref to store the position of the card 
    const position = useRef(new Animated.ValueXY()).current;
    const initialPosition = useRef({ x: 0, y: 0 });

    const [dragging, setDragging] = useState(false);

    // Create a pan responder to handle touch events 
    const panResponder = useRef(
        PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onMoveShouldSetPanResponder: () => true,
            onPanResponderGrant: (_, gesture) => {
                // Save the initial position of the card 
                initialPosition.current = { x: 0, y: gesture.y0 };
                // When touch gesture starts, set dragging to true 
                setDragging(true);
            },
            onPanResponderMove: (_, gesture) => {
                if (gesture.dy > 3) {
                    position.setValue({ x: 0, y: gesture.dy });
                    // const dropAreaCoordinate = new Animated.ValueXY();
                    // dropAreaCoordinate.setValue({ x: 0, y: dropAreaLayoutRef.current?.y - dropAreaLayoutRef.current?.height })
                    // console.log('Dropped in area:', position.y >= dropAreaCoordinate.y);

                }
            },
            onPanResponderRelease: (_, gesture) => {
                // When touch gesture is released, set dragging to false 
                // Animate the card back to its initial position 
                setDragging(false);

                position.flattenOffset();

                if (onDrop(gesture)) {
                    console.log("Dropped inside the target area");
                    setCurrentIndex(index)
                    Animated.spring(position, {
                        //toValue: { x: 0, y: dropAreaPosition.current.y -  Dimensions.get('window').height * 0.07},
                        toValue: { x: 0, y: 0 },
                        useNativeDriver: false,
                    }).start();
                } else {
                    console.log("Dropped outside the target area");
                    // Animate the card back to its initial position
                    Animated.spring(position, {
                        toValue: { x: 0, y: 0 },
                        useNativeDriver: false,
                    }).start();
                }


            },
        })
    ).current;




    return (
        <View style={{ justifyContent: 'space-between' }}>
            <Animated.View
                style={[
                    {
                        transform: position.getTranslateTransform(),
                        opacity: dragging ? 0.8 : 1,
                        height: '40%',
                    },
                ]}
                {...(panResponder.panHandlers)}
            >
                {content}

            </Animated.View>
        </View>

    );
};

export default DragableComponent