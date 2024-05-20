import { useCallback, useEffect, useRef, useState } from "react";
import { Animated, LayoutChangeEvent, PanResponder, PanResponderGestureState, View } from "react-native";


type DragableComponentProps = {
    content: JSX.Element,
    dropArea: JSX.Element,
}
const DragableComponent = ({ content, dropArea }: DragableComponentProps) => {
    // Create a ref to store the position of the card 
    const position = useRef(new Animated.ValueXY()).current;
    const initialPosition = useRef({ x: 0, y: 0 });

    const [dropAreaY, setDropAreaY] = useState(0);
    const dropAreaLayoutRef = useRef<{ x: number; y: number; width: number; height: number }>({ x: 0, y: 0, height: 0, width: 0 });

    const [dragging, setDragging] = useState(false);
    const [zIndex, setZIndex] = useState(0); // State to manage zIndex
    //const [dropAreaLayout, setDropAreaLayout] = useState<{ x: number; y: number; width: number; height: number } | null>(null);
    //const [x, setX] = useState<number | null>(null);

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
                setZIndex(1);
            },
            onPanResponderMove: (_, gesture) => {
                if (gesture.dy > 3) {
                    position.setValue({ x: 0, y: gesture.dy });
                }
            },
            onPanResponderRelease: (_, gesture) => {
                // When touch gesture is released, set dragging to false 
                // Animate the card back to its initial position 
                setDragging(false);
                setZIndex(0);

                // position.flattenOffset();
                console.log(dropAreaY);

                if (dropAreaLayoutRef) {
                    const droppedInArea = (
                        Number(position.x) >= dropAreaLayoutRef.current.x &&
                        Number(position.x) <= dropAreaLayoutRef.current.x + dropAreaLayoutRef.current.width &&
                        Number(position.y) >= dropAreaLayoutRef.current?.y &&
                        Number(position.y) <= dropAreaLayoutRef.current.y + dropAreaLayoutRef.current.height
                    );

                    console.log('Dropped in area:', droppedInArea);
                    onDrop(droppedInArea);
                }


                Animated.spring(position, {
                    toValue: { x: 0, y: dropAreaLayoutRef.current?.y ?? 0 },
                    useNativeDriver: false,
                }).start();


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
                        //zIndex: 10000000
                    },
                ]}
                {...(panResponder.panHandlers)}
            >
                {content}

            </Animated.View>


            <View
                style={{ height: '45%' }}
                onLayout={(event) => {
                    const { width, x, y, height } = event.nativeEvent.layout
                    console.log(width);
                    console.log(x);
                    console.log(y);
                    console.log('Saving');
                    setDropAreaY(y);
                    console.log(height);
                    dropAreaLayoutRef.current = { x, y, width, height };
                }}
            >
                {dropArea}
            </View>


        </View>

    );
};

export default DragableComponent