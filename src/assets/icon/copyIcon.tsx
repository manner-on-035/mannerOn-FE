interface CopyIconProps {
    isClicked?: boolean;
    onClick?: React.MouseEventHandler<SVGSVGElement>;
  }

export default function CopyIcon({isClicked, onClick}: CopyIconProps){

    return(
        isClicked ?(<svg onClick={onClick} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.6091 4.94333V4.41111C12.6091 3.99961 12.2756 3.66602 11.864 3.66602H4.41307C4.00156 3.66602 3.66797 3.99961 3.66797 4.41112V11.8621C3.66797 12.2736 4.00156 12.6072 4.41307 12.6072H4.94528" stroke="black" strokeWidth="1.4902" strokeLinecap="round"/>
        <rect x="7.39062" y="7.39258" width="8.94118" height="8.94118" rx="0.745098" fill="black" stroke="black" strokeWidth="1.4902"/>
        </svg>)
        :(
        <svg onClick={onClick} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.6091 4.94333V4.41111C12.6091 3.99961 12.2756 3.66602 11.864 3.66602H4.41307C4.00156 3.66602 3.66797 3.99961 3.66797 4.41111V11.8621C3.66797 12.2736 4.00156 12.6072 4.41307 12.6072H4.94528" stroke="#828382" strokeWidth="1.4902" strokeLinecap="round"/>
        <rect x="7.39062" y="7.39258" width="8.94118" height="8.94118" rx="0.745098" stroke="#828382" strokeWidth="1.4902"/>
        </svg>)
        
    )
}




