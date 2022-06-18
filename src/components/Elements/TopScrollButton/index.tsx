import React, { CSSProperties, ReactNode } from 'react';
import { Button } from './styles'

interface TopScrollButtonProps {
    elementReferenceId: string;
    icon: ReactNode;
    style?: CSSProperties;
    className?: string;
}

export function TopScrollButton({
    className,
    style,
    elementReferenceId,
    icon
}: TopScrollButtonProps) {

    function backToTop() {
        const getTarget = document.getElementById(elementReferenceId)
        getTarget!.scrollIntoView()
    }

    return (
        <Button
            onClick={backToTop}
            style={style}
            className={className}
        >
            {icon}
        </Button>
    )
}