/* eslint-disable no-magic-numbers */
import type {FC, ElementType, ReactElement} from 'react';
import type {Theme} from '@material-ui/core/styles';
import React, {memo, useEffect} from 'react';
import {makeStyles, createStyles} from '@material-ui/core/styles';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TablePagination,
  TableRow,
  Paper,
  IconButton,
} from '@material-ui/core';
import {TablePaginationActionsProps} from '@material-ui/core/TablePagination/TablePaginationActions';
import {
  FirstPage as FirstPageIcon,
  KeyboardArrowLeft,
  KeyboardArrowRight,
  LastPage as LastPageIcon,
} from '@material-ui/icons';
import {useStoreContext, useDispatchContext} from '../Store';

const useStyles1 = makeStyles((theme: Theme) => createStyles({
  root: {
    flexShrink: 0,
    marginLeft: theme.spacing(2),
  },
}));
const useStyles2 = makeStyles({
  table: {
    minWidth: 500,
  },
});

const TablePaginationActions: ElementType<TablePaginationActionsProps> = ({count, page, rowsPerPage, onChangePage}) => {
  const classes = useStyles1();

  const handleFirstPageButtonClick = (event): void => {
    onChangePage(event, 0);
  };

  const handleBackButtonClick = (event): void => {
    onChangePage(event, page - 1);
  };

  const handleNextButtonClick = (event): void => {
    onChangePage(event, page + 1);
  };

  const handleLastPageButtonClick = (event): void => {
    onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <div className={classes.root}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        <FirstPageIcon/>
      </IconButton>
      <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page">
        <KeyboardArrowLeft/>
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        <KeyboardArrowRight/>
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        <LastPageIcon/>
      </IconButton>
    </div>
  );
};

const List: FC<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  population: Array<any>;
  render: (any, index: number) => ReactElement;
  rowsPerPageOptions?: Array<number>;
  defaultPerPage?: number;
}> = memo(({population, render, rowsPerPageOptions, defaultPerPage}) => {
  const classes                                                 = useStyles2();
  const {store: {pagination: {page, rowsPerPage, initialized}}} = useStoreContext();
  const {dispatch}                                              = useDispatchContext();

  const emptyRows               = rowsPerPage - Math.min(rowsPerPage, population.length - page * rowsPerPage);
  const handleChangePage        = (event, newPage) => {
    dispatch({type: 'PAGINATION_PAGE', page: newPage});
  };
  const handleChangeRowsPerPage = (event) => {
    dispatch({type: 'PAGINATION_PER_PAGE', rowsPerPage: parseInt(event.target.value, 10)});
    dispatch({type: 'PAGINATION_PAGE', page: 0});
  };

  useEffect(() => {
    if (!initialized) {
      if (defaultPerPage) {
        if (defaultPerPage !== rowsPerPage) {
          dispatch({type: 'PAGINATION_PER_PAGE', rowsPerPage: defaultPerPage});
        }
      } else if (rowsPerPageOptions && rowsPerPageOptions[0] !== rowsPerPage) {
        dispatch({type: 'PAGINATION_PER_PAGE', rowsPerPage: rowsPerPageOptions[0]});
      }
      dispatch({type: 'PAGINATION_INITIALIZED'});
    }
  }, []);


  return <TableContainer component={Paper}>
    <Table className={classes.table}>
      <TableBody>
        {(rowsPerPage > 0 ? population.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) : population).map((row, index) => (
          <TableRow key={index}>
            {render(row, index)}
          </TableRow>
        ))}

        {emptyRows > 0 && (
          <TableRow style={{height: 53 * emptyRows}}>
            <TableCell colSpan={6}/>
          </TableRow>
        )}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TablePagination
            rowsPerPageOptions={rowsPerPageOptions ?? [10, 30, 50, 100]}
            colSpan={3}
            count={population.length}
            rowsPerPage={rowsPerPage}
            page={page}
            SelectProps={{
              inputProps: {'aria-label': 'rows per page'},
              native: true,
            }}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
            ActionsComponent={TablePaginationActions}
          />
        </TableRow>
      </TableFooter>
    </Table>
  </TableContainer>;
});

List.displayName = 'List';
export default List;
