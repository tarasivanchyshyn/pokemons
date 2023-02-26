import { useEffect, useState, useMemo } from 'react';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import Stack from '@mui/material/Stack';

function Paginationn({ items, onPageChange }) {
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 12;
  const pageCount = Math.ceil(items.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = useMemo(
    () => items.slice(startIndex, endIndex),
    [items, startIndex, endIndex]
  );

  useEffect(() => {
    onPageChange(currentItems);
  }, [currentItems, onPageChange]);

  const handleClick = (e, page) => {
    e.preventDefault();
    setCurrentPage(page);
  };

  return (
    <Stack>
      <Pagination
        page={currentPage}
        count={pageCount}
        onChange={handleClick}
        color='primary'
        renderItem={(item) => (
          <PaginationItem
            components={{
              next: () => 'Next',
              previous: () => 'Prev'
            }}
            {...item}
          />
        )}
      />
    </Stack>
  );
}

export default Paginationn;
