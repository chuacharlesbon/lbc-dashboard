import React from 'react';
import { Spacer } from '../../core/Containers';
import { Text } from '../../core/Text';
import { classNames } from '../../helpers/ClassNames';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { ImHome } from 'react-icons/im';

export const Pagination = ({
    currentPage,
    itemsPerPage,
    paginate,
    totalItems,
}) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
        pageNumbers.push(i);
    }

    const lastPage = Math.ceil(totalItems / itemsPerPage);
    const [pageNumber, setPageNumber] = React.useState<number>(1);
    const [isLastPage, setIsLastPage] = React.useState(false);
    const [isFirstPage, setIsFirstPage] = React.useState(false);

    React.useEffect(() => {
        if (totalItems !== 0) {
            if (pageNumber > lastPage || currentPage > lastPage) {
                setPageNumber(lastPage)
                paginate(lastPage)
            } else if (pageNumber < 0 || currentPage < 0) {
                setPageNumber(1)
                paginate(1)
            }
        }
    }, [currentPage, pageNumber])

    React.useEffect(() => {
        if (currentPage !== pageNumber) {
            setPageNumber(currentPage)
        }
    }, [currentPage])

    React.useEffect(() => {
        if (currentPage === lastPage || pageNumber === lastPage) {
            setIsLastPage(true)
            setIsFirstPage(false)
        } else if (currentPage === 1 || pageNumber === 1) {
            setIsFirstPage(true)
            setIsLastPage(false)
        } else {
            setIsLastPage(false)
            setIsFirstPage(false)
        }
    }, [currentPage, pageNumber, itemsPerPage])

    return (
        <div className="">
            <nav className="block">

                <div className='flex flex-row justify-center items-center'>
                    <ImHome className='text-lg text-red-400' />
                    <Text className='mx-4 text-grey-200'>
                        {`${currentPage} of ${lastPage}`}
                    </Text>
                    <div className={classNames("fas fa-chevron-left text-2xl",
                        currentPage !== 1 ?
                            "text-red-400 hover:text-red-100 cursor-pointer" :
                            "text-grey-400 hover:text-grey-200 pointer-events-none"
                    )}
                        onClick={() => {
                            setPageNumber(currentPage - 1)
                            paginate(currentPage - 1)
                        }}
                    >
                        <BsChevronLeft />
                    </div>
                    <Spacer className='w-4' />
                    <div
                        className={classNames("fas fa-chevron-right text-2xl",
                            currentPage !== lastPage ?
                                "text-red-400 hover:text-red-100 cursor-pointer" :
                                "text-grey-400 hover:text-grey-200 pointer-events-none"
                        )}
                        onClick={() => {
                            setPageNumber(currentPage + 1)
                            paginate(currentPage + 1)
                        }}
                    >
                        <BsChevronRight />
                    </div>
                </div>

            </nav>
        </div>
    );
};

export const PaginationCustom = ({
    element1,
    element2,
    currentPage,
    itemsPerPage,
    paginate,
    totalItems,
}) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
        pageNumbers.push(i);
    }

    const lastPage = Math.ceil(totalItems / itemsPerPage);
    const [pageNumber, setPageNumber] = React.useState<number>(1);
    const [isLastPage, setIsLastPage] = React.useState(false);
    const [isFirstPage, setIsFirstPage] = React.useState(false);

    React.useEffect(() => {
        if (totalItems !== 0) {
            if (pageNumber > lastPage || currentPage > lastPage) {
                setPageNumber(lastPage)
                paginate(lastPage)
            } else if (pageNumber < 0 || currentPage < 0) {
                setPageNumber(1)
                paginate(1)
            }
        }
    }, [currentPage, pageNumber])

    React.useEffect(() => {
        if (currentPage !== pageNumber) {
            setPageNumber(currentPage)
        }
    }, [currentPage])

    React.useEffect(() => {
        if (currentPage === lastPage || pageNumber === lastPage) {
            setIsLastPage(true)
            setIsFirstPage(false)
        } else if (currentPage === 1 || pageNumber === 1) {
            setIsFirstPage(true)
            setIsLastPage(false)
        } else {
            setIsLastPage(false)
            setIsFirstPage(false)
        }
    }, [currentPage, pageNumber, itemsPerPage])

    return (
        <div className="">
            <nav className="block">

                <div className='flex flex-row justify-center items-center'>
                    {element1 ?? <ImHome className='text-lg text-red-400' />}
                    {element2 ?? <Text className='mx-4 text-grey-200'>{`${currentPage} of ${lastPage}`}</Text>}
                    <div className={classNames("fas fa-chevron-left text-2xl",
                        currentPage !== 1 ?
                            "text-red-400 hover:text-red-100 cursor-pointer" :
                            "text-grey-400 hover:text-grey-200 pointer-events-none"
                    )}
                        onClick={() => {
                            setPageNumber(currentPage - 1)
                            paginate(currentPage - 1)
                        }}
                    >
                        <BsChevronLeft />
                    </div>
                    <Spacer className='w-4' />
                    <div
                        className={classNames("fas fa-chevron-right text-2xl cursor-pointer",
                            currentPage !== lastPage ?
                                "text-red-400 hover:text-red-100 cursor-pointer" :
                                "text-grey-400 hover:text-grey-200 pointer-events-none"
                        )}
                        onClick={() => {
                            setPageNumber(currentPage + 1)
                            paginate(currentPage + 1)
                        }}
                    >
                        <BsChevronRight />
                    </div>
                </div>

            </nav>
        </div>
    );
};