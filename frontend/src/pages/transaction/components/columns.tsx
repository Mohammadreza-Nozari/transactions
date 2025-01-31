import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ITransaction } from "@/interfaces/ITransaction";
import { socket } from "@/store";

export const columns: ColumnDef<ITransaction>[] = [
  {
    accessorKey: "id",
    header: ({ column }) => {
      return (
        <div
          className=" flex items-center "
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Refrence number
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </div>
      );
    },
  },
  {
    accessorKey: "to",
    header: "To",
  },
  {
    accessorKey: "date",
    header: "Date",
  },
  {
    accessorKey: "amount",
    header: "Amount",
  },
  {
    accessorKey: "currency",
    header: "Currency",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "actions",
    header: "Action",
    cell: ({ row }) => {
      // This function handles the update of the transaction status
      const handleStatusUpdate = (info: any) => {
        // Extract the original data from the provided 'info' object
        const data = info.original;

        // Check if 'data' is available to avoid errors
        if (data) {
          // Toggle the status between 'Approved' and 'Pending'
          const newStatus = data.status === "Approved" ? "Pending" : "Approved";

          // Emit an event to update the transaction status via the socket
          socket.emit("updateTransactionStatus", {
            id: data.id, // The transaction ID
            status: newStatus, // The new status ('Approved' or 'Pending')
          });
        }
      };

      const downloadRow = (info: any) => {
        const jsonData = info.original;
        const jsonString = JSON.stringify(jsonData, null, 2); // Convert JSON to string
        const blob = new Blob([jsonString], { type: "application/json" }); // Create a Blob
        const url = URL.createObjectURL(blob); // Create a download URL

        // Create an anchor element and simulate a click to trigger the download
        const a = document.createElement("a");
        a.href = url;
        a.download = "data.json"; // Filename for the downloaded file
        a.click();

        // Clean up the URL object
        URL.revokeObjectURL(url);
      };

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(row.getValue("id"))}
            >
              Copy ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={() => {
                handleStatusUpdate(row);
              }}
            >
              Change Status to
              {row.original.status == "Approved" ? "Pending" : "Approved"}
            </DropdownMenuItem>

            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={() => {
                downloadRow(row);
              }}
            >
              download
            </DropdownMenuItem>

            <DropdownMenuSeparator />
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
