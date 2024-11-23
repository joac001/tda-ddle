import { useEffect, useState } from "react";

export function usePage() {
    const [page, setPage] = useState(0);

    return {
        page,
        setPage,
    };
}
