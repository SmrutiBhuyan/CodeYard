import random
GOAL = [[1,2,3], [4,5,6],[7,8,0]]

class puzzle3X3:
    def __init__(self):
        self.board = [num for row in GOAL for num in row]
        random.shuffle(self.board)
        while not self.is_solvable():
            random.shuffle(self.board)
        self.board = [self.board[i:i+3] for i in range(0,9,3)]
    
    def is_solvable(self):
        nums = [n for n in self.board if n!=0]
        inversions = sum(nums[i] > nums[j] for i in range(len(nums)) for j in range(i+1, len(nums)))
        return inversions%2==0
    
    def is_solved(self):
        return self.board == GOAL
    
    def display(self):
        for row in self.board:
            print(" ".join(str(n) if n else " " for n in row))
        print()

    def move(self,direction):
        x,y = next((i,j) for i in range(3) for j in range(3) if self.board[i][j]==0)
        moves = {"up": (x-1,y), "down":(x+1,y), "left":(x,y-1), "right": (x,y+1)}
        if direction in moves and 0<= moves[direction][0]<3 and 0<= moves[direction][1]<3:
            nx,ny = moves[direction]
            self.board[x][y], self.board[nx][ny] = self.board[nx][ny], self.board[x][y]
        else:
            print("Invalid move!")

def play():
    puzzle=puzzle3X3()
    while not puzzle.is_solved():
        puzzle.display()
        puzzle.move(input("up/down/left/right").strip().lower())
        puzzle.display()
play()