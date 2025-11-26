import React from "react";
import Box from "@mui/material/Box";
import Pagination from "@mui/material/Pagination";

interface PaginationControlProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

function PaginationControl({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationControlProps) {
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    onPageChange(value);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        my: 2,
      }}
    >
      <Pagination
        count={totalPages}
        page={currentPage}
        onChange={handleChange}
        color="primary"
        shape="rounded"
        size="medium"
        sx={{
          bgcolor: "#ffffff",
          p: 1,
          borderRadius: "999px",
          "& .MuiPaginationItem-root": {
            color: "#1976d2",
            borderRadius: "50%",
          },
          "& .Mui-selected": {
            bgcolor: "#1976d2",
            color: "#ffffff",
          },
        }}
      />
    </Box>
  );
}

export default PaginationControl;
