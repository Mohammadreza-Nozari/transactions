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
import { Checkbox } from "@/components/ui/checkbox";
import { ITransaction } from "@/interfaces/ITransaction";
import { socket } from "@/store";

export const columns: ColumnDef<ITransaction>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
  },
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
      const handleStatusUpdate = (info: any) => {
        const data = info.original;
        if (data) {
          const newStatus = data.status === "Approved" ? "Pending" : "Approved";
          socket.emit("updateTransactionStatus", {
            id: data.id,
            status: newStatus,
          });
        }
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
              Change Status to{" "}
              {row.original.status == "Approved" ? "Pending" : "Approved"}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
