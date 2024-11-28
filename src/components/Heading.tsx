import FramerWrapper from "./animations/FramerWrapper";

const Heading = ({children}:{children:React.ReactNode}) => {
    return (
        <FramerWrapper y={0} x={100}>
    <h1 className="font-poppins text-primary font-bold text-4xl name_underline max-sm:text-2xl">
        {children}
    </h1>
        </FramerWrapper>
    )
}

export default Heading;